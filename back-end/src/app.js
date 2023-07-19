const express = require('express');
const cors = require('cors');
require('express-async-errors');
const messagesRouter = require('./router/messagesRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/messages', messagesRouter);

module.exports = app;