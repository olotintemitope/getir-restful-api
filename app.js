const express = require('express');
const logger = require('morgan');
const dbConnect = require('./config/database.connect');

const indexRouter = require('./routes/index');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the mongoose db
dbConnect();

app.use('/', indexRouter);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

module.exports = app;
