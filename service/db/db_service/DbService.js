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
db.on('error', function() {
    console.log('Error inserting into database');
    console.error.bind(console, 'MongoDb connection error: ');
    // close the db
    db.close();

});
db.on('open', function () {
    console.log('Connection successful...');
    // for now we insert a predefined entry
   insertService._insert();
   db.close();
});
