const dbConfig = require('./database.config.js');
const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose.Promise = global.Promise;
// Connecting to the database
  mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });
}

module.exports = connectToDb;