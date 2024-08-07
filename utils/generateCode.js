/*
Generador del codigo alfanumérico de la url, comprobando que no se repita en la base de datos
*/
const db = require('../utils/db.js');

const generateCode = async () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let code = ''
    for (let i = 0; i < 7; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    // Comprobar si el código ya existe en la base de datos
    return db.connect().then(() => {
        const collection = db.getCollection('urls')
        const query = { code: code }
        collection.findOne(query, (err, result) => {
            if (err) throw err
            if (result) {
                db.close()
                return generateCode();
            } else {
                db.close();
                return code;
            }
        })
    }).catch(err => {
        throw err
    })
}

module.exports = { generateCode };
