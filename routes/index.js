const express = require('express');
const router = express.Router();
const { postGenerateCode, redirect } = require('../controllers/indexController.js');

router.get('/', (req, res) => {
    res.render('index');
});
router.post('/', postGenerateCode);
router.get('/:code', redirect);

module.exports = router;
