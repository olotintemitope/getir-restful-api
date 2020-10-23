const express = require('express');
const logger = require('morgan');

require('dotenv').config();
const port = process.env.PORT || 3070;

console.log(process.env.MONGODB_URL)

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

const indexRouter = require('./routes/index');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
