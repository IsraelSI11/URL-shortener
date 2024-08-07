const express = require('express');
const router = express.Router();
const postGenerateCode = require('../controllers/indexController.js');
const redirect = require('../controllers/indexController.js');

router.post('/', postGenerateCode);
router.get('/:code', redirect);

module.exports = router;
