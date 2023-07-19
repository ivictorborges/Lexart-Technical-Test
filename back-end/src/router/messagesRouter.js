const express = require('express');
const messagesController = require('../controller/messagesController');

const router = express.Router();

router.post('/', messagesController.postMessages);
router.get('/export', messagesController.exportMessages);

module.exports = router;