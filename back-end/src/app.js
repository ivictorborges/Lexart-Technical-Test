const express = require('express');
const cors = require('cors');
require('express-async-errors');
const messagesRouter = require('./router/messagesRouter');

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Welcome to Chatbot API !')
  });

app.use('/messages', messagesRouter);

module.exports = app;