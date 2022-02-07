const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');
const server = express();
const localhost = '127.0.0.1';
const port = 3000;
const mongoose = require('mongoose');
const dbInstance = require('../db/db');
mongoose.connect('mongodb://localhost:27017/myDB', {
  useNewUrlParser: true});
const db = mongoose.connection;
db.on('open', () =>console.log('Connected!'))
.on('error', console.error.bind(console, 'MangoDB connection error:'));

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/class', router);

server.post('/class', (req, res) => {
  let instance = new dbInstance(req.body);

  instance.save(function (err) {
    if(err) return handleError(err);
    console.log('Saved');
  });
  res.status(200);
  res.end();
});
server.listen(port, () => console.log(`listening on ${port}`))