const { MongoClient, ServerApiVersion } = require('mongodb');
const connectionURI = process.env.DATABASE_URL;
const client = new MongoClient(connectionURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

module.exports = { client };