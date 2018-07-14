// Once we derive a custom schema, we could compile it to a model
let PlayerSchema = require('../schemas/PlayerSchema');
let mongoose = require('mongoose');
module.exports = {
    CumulativePlayerStatsModel: function() {
        let PlayerSchema = PlayerSchema.PlayerSchema;
        // the model takes 3 arguments:
        // the name of the model
        // the schema
        // and the collection in the db
        return mongoose.model('DailyPlayerStatsModel', PlayerSchema , 'DailyPlayerStats')
    }
};