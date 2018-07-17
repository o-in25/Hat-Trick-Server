// Once we derive a custom schema, we could compile it to a model
let PlayerProfileSchema = require('../schemas/PlayerProfileSchema');
let mongoose = require('mongoose');
module.exports = {
    ActivePlayersModel: function() {
        let PlayerProfileSchema = PlayerProfileSchema.PlayerSchema;
        return mongoose.model('ActivePlayersModel', PlayerProfileSchema , 'ActivePlayers')
    }
};