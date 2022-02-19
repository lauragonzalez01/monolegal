using MongoDB.Bson;

public class Client
{
    public ObjectId Id { get; set; }
    public int ClientId { get; set; }
    public string BusinessName { get; set; }
    public string PersonKind { get; set; }
    public string DocumentType { get; set; }
    public string Document { get; set; }
    public string Mail { get; set; }
    public long Cellphone { get; set; }
}