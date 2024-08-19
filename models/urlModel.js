const { client } = require('../utils/db.js');

const findCode = async (code) => {
    try {
        await client.connect();
        const collection = client.db('url-shortener').collection('urls');
        const query = { code: code };
        const result = await collection.findOne(query);
        return result;
    } catch (err) {
        console.error('Error finding code:', err);
        throw err;
    } finally {
        await client.close();
    }
}

const insertCode = async (code, url) => {
    try {
        await client.connect();
        const collection = client.db('url-shortener').collection('urls');
        const query = { code: code, url: url };
        const result = await collection.insertOne(query);
        return result.insertedCount;
    } catch (err) {
        console.error('Error inserting code:', err);
        throw err;
    } finally {
        await client.close();
    }
}

module.exports = { findCode, insertCode };