using MongoDB.Bson;

namespace MonolegalAPI.Models
{
    public class Invoice
    {
        public ObjectId Id { get; set; }
        public string Code { get; set; }
        public int ClientId { get; set; }
        public string City { get; set; }
        public int Total { get; set; }
        public int SubTotal { get; set; }
        public int VAT { get; set; }
        public int Retention { get; set; }
        public DateTime CreationDate { get; set; }
        public string State { get; set; }
        public bool Paid { get; set; }
        public DateTime PaidDate { get; set; }

    }
}
