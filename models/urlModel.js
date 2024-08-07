const db = require('../utils/db.js');

const findCode = async (code) => {
    db.connect().then(() => {
        const collection = db.getCollection('urls')
        const query = { code: code }
        collection.findOne(query, (err, result) => {
            if (err) throw err
            db.close()
            return result
        })
    }).catch(err => {
        throw err
    })
}

const insertCode = async (code, url) => {
    db.connect().then(() => {
        const collection = db.getCollection('urls')
        const query = { code: code, url: url }
        collection.insertOne(query, (err, result) => {
            if (err) throw err
            db.close()
            return result.insertedCount;
        }
        )
    }).catch(err => {
        throw err
    });
}

module.exports = { findCode, insertCode };