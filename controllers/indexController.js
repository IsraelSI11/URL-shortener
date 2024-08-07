const generateCode = require('../utils/generateCode.js');
const findCode = require('../models/urlModel.js');
const insertCode = require('../models/urlModel.js');

const postGenerateCode = async (req, res) => {
    try {
        let code = null;
        do {
            code = generateCode();
        } while (await findCode(code) != null);
        const url = req.body.url;
        await insertCode(code, url);
        res.render('index', { code: codigo });
    } catch (err) {
        res.render('error', { message: 'Error al acortar la url' });
    }
}

const redirect = async (req, res) => {
    const code = req.params.code;
    const result = await findCode(code);
    if (result) {
        res.redirect(result.url);
    }
    else {
        res.render('error', { message: 'Url no encontrada' });
    }
}

module.exports = { postGenerateCode, redirect };