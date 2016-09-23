const express = require('express');
const morgan = require('morgan');
const mochaMiddleware = require('./index');

const port = 8888;
const app = express();

app.use(morgan('dev'));
app.use(mochaMiddleware());
app.use(express.static(process.cwd()));

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:%s', port);
});