const { MongoClient } = require('mongodb');
const connectionURI = process.env.DATABASE_URL;
const client = new MongoClient(connectionURI);

module.exports = { client };