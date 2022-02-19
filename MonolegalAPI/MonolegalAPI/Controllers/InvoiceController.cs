using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MonolegalAPI.Classes;
using MonolegalAPI.Models;
using System.Net.Mail;
using System.Net;

namespace MonolegalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly CommonClass _commonClass;

        public InvoiceController(IConfiguration configuration)
        {
            _configuration = configuration;
            _commonClass = new CommonClass(_configuration);
        }

        [HttpGet]
        public JsonResult Get()
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("monolegalConn"));

            var invoiceList = dbClient.GetDatabase("monolegal-db").GetCollection<Invoice>("invoice").AsQueryable();

            return new JsonResult(invoiceList);
        }

        [HttpPost]
        public JsonResult SendReminders()
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("monolegalConn"));

            var states = new Dictionary<string, string>();
            states.Add("primerrecordatorio", "segundorecordatorio");
            states.Add("segundorecordatorio", "desactivado");

            var invoiceCollection = dbClient.GetDatabase("monolegal-db").GetCollection<Invoice>("invoice");

            var invoiceRemindersList = invoiceCollection.Find(invoice => invoice.State == "primerrecordatorio" || invoice.State == "segundorecordatorio").ToList();

            if (invoiceRemindersList != null)
            {
                foreach (var invoiceReminder in invoiceRemindersList)
                {
                    SmtpClient smtpClient = new SmtpClient("smtp.gmail.com");
                    smtpClient.EnableSsl = true;
                    smtpClient.UseDefaultCredentials = false;
                    smtpClient.Host = "smtp.gmail.com";
                    smtpClient.Port = 587;
                    smtpClient.Credentials = new NetworkCredential("monolegal0@gmail.com", "desarrollo01.");


                    MailMessage mail = new MailMessage();
                    mail.From = new MailAddress("monolegal0@gmail.com", "Recordatorio de pago factura");
                    mail.Subject = "Monolegal: Pago de factura";
                    mail.IsBodyHtml = true;

                    var clientReminder = _commonClass.GetById(invoiceReminder.ClientId);
                    mail.To.Add(new MailAddress(clientReminder.Mail));
                    mail.Body =
                        "<body>" +
                            "<h1>Aviso importante para " + clientReminder.BusinessName + "</h1>" +
                            "<h4>Estimado/a " + clientReminder.BusinessName + "</h4>" +
                            "<span>El presente tiene como fin informarle que su factura número: " + invoiceReminder.Code + " se encuentra en mora </span>" +
                            "<span>y se encuentra en estado: " + invoiceReminder.State + " por lo tanto </span>" +
                            "<span>al recibir este correo pasara automaticamente al estado de: " + states[invoiceReminder.State] +
                            "<span> esperamos pueda realizar el pago oportuno de su factura, de antemano muchas gracias.</span>" +
                            "<br/><br/><span>Cordialmente,</span>" +
                            "<br/><span>MONOLEGAL</span>" +
                        "</body>";
                    smtpClient.Send(mail);

                    var reminderUpdate = Builders<Invoice>.Update.Set("State", states[invoiceReminder.State]);
                    var reminderUpdatefilter = Builders<Invoice>.Filter.Eq("ClientId", invoiceReminder.ClientId);
                    invoiceCollection.UpdateOne(reminderUpdatefilter, reminderUpdate);
                    smtpClient.Dispose();
                }
            }

            return new JsonResult("Mail sended and state updated successfully");
        }
    }
}
