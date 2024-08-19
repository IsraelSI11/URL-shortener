const { generateCode } = require('../utils/generateCode.js');
const { findCode, insertCode } = require('../models/urlModel.js');

const postGenerateCode = async (req, res) => {
    try {
        let code = null;
        do {
            code = await generateCode();
        } while (await findCode(code) != null);
        await insertCode(code, url);
        res.render('index', { code: code });
    } catch (err) {
        console.error(err);
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