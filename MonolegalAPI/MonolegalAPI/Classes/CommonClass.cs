using MongoDB.Driver;

namespace MonolegalAPI.Classes
{
    public class CommonClass
    {
        private readonly IConfiguration _configuration;

        public CommonClass(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public Client GetById(int id)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("monolegalConn"));

            var clientCollection = dbClient.GetDatabase("monolegal-db").GetCollection<Client>("client");
            var filter = Builders<Client>.Filter.Eq("ClientId", id);

            return clientCollection.Find(filter).First();
        }
    }
}
