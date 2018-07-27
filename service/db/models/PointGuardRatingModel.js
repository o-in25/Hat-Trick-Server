let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let SchemaManager = require('./schemas/SchemaManager');
module.exports = {
    PointGuardRatingModel: function(collection) {
        return mongoose.model(collection, new Schema(SchemaManager.PointGuardRatingsManager.PointGuardRatingSchema));
    }
};