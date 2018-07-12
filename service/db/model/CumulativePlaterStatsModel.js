// Once we derive a custom schema, we could compile it to a model
let CumulativePlayerStatsSchema = require('../schemas/PlayerSchema');
let mongoose = require('mongoose');
module.exports = {
  CumulativePlayerStatsModel: function() {
    let CumulativePlayerStatsSchem = CumulativePlayerStatsSchema.PlayerSchema;
    return mongoose.model('CumulativePlayerStatsModel', CumulativePlayerStatsSchem , 'CumulativePlayerStats')
  }
};