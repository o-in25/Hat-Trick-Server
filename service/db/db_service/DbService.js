// the DbService will communicate with the database and will
// provide operations for crud functions
let mongoose = require('mongoose');
//Set up default mongoose connection
let url = 'mongodb://127.0.0.1/test';
mongoose.connect(url);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
let db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
module.exports = {
  connectToDb: function() {
      return new Promise((resolve, reject) => {
          db.on('open', function () {
              console.log('Connection to ' + url + ' successful...');
              resolve(db);
          });
          db.on('error', function () {
              console.log('Error connecting to database...');
              console.error.bind(console, 'MongoDb connection error: ');
              reject(db);
          })
      });
  }
};