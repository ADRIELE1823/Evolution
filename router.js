const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/usuario', controller.getUser);

router.post('/usuario', controller.addUser);

module.exports = router;
