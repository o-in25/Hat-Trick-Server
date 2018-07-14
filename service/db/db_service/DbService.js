// the DbService will communicate with the database and will
// provide operations for crud functions
let mongoose = require('mongoose');
let insertService = require('../db_service/InsertService');
//Set up default mongoose connection
mongoose.connect('mongodb://127.0.0.1/test');
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
let db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
module.exports = {
  connectToDb: function() {
      return new Promise((resolve, reject) => {
          db.on('open', function () {
              console.log('Connection successful...');
              resolve(db);
          });
          db.on('error', function () {
              console.log('Error inserting into database...');
              console.error.bind(console, 'MongoDb connection error: ');
              reject(db);
          })
      });
  }
};