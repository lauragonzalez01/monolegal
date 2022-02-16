using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MonolegalAPI.Models;

namespace MonolegalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public InvoiceController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("monolegalConn"));

            var invoiceList = dbClient.GetDatabase("monolegal-db").GetCollection<Invoice>("invoice").AsQueryable();

            return new JsonResult(invoiceList);
        }
    }
}
