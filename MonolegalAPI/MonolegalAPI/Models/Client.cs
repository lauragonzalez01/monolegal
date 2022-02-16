using MongoDB.Bson;

public class Client
{
    public ObjectId Id { get; set; }
    public int ClientId { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public string Mail { get; set; }
    public int Cellphone { get; set; }
}