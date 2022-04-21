const express = require('express');
const router = express.Router();
const weatherController = require('./controllers/weatherController');
const handleError = require("./handlers/handleError");

router.get('/', weatherController.getMeteo);

router.use(handleError);

module.exports = router;
