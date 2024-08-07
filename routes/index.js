const express = require('express');
const generateCode = require('../utils/generateCode');
const router = express.Router();

router.post('/', function (req, res, next) {
  //Generar el código
  try {
    const codigo = generateCode();
    res.render('index', { code: codigo });
  } catch (err) {
    res.render('error', { message: 'Error al generar el código' });
  }
});

router.get('/:code', function (req, res, next) {
  //Redirigir a la url original
  res.render('index', { title: 'Express' });
});

module.exports = router;
