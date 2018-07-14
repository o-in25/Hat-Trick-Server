let mongoose = require('mongoose');
let CumulativePlayerStatsModel = require('../model/CumulativePlaterStatsModel');
let CumulativePlayerStatsApi = require('../../api/api_service/nba/CumulativePlayerStatsApi');
module.exports = {
    _insert: function() {
        return CumulativePlayerStatsApi.getCumulativePlayerStats({'team':'cleveland-cavaliers'}, function(res) {
            // here, we create a model from an injected model as a
            // param to our function
            let Model = CumulativePlayerStatsModel.CumulativePlayerStatsModel();
            // in order to save the model into the db w
            // an instance of it must be made
            let dbEntry = new Model(res[0]); // create an instance of the obj
            dbEntry.save(function(err, succ) { // finally we can save it
                if(err) {
                    console.log('Failed to add...');
                    console.log(err);
                } else {
                    console.log('Entry successfully added...')
                }
            });
        });
    },
    _InsertCumulativePlayerStatsByTeam : function() {
        return CumulativePlayerStatsApi.getCumulativePlayerStats({'team':'cleveland-cavaliers'}, function(res) {
            // here, we create a model from an injected model as a
            // param to our function
            let Model = CumulativePlayerStatsModel.CumulativePlayerStatsModel();
            // in order to save the model into the db w
            // an instance of it must be made
            let dbEntry = new Model(res[0]); // create an instance of the obj
            dbEntry.save(function(err, succ) { // finally we can save it
                if(err) {
                    console.log('Failed to add...');
                    console.log(err);
                } else {
                    console.log('Entry successfully added...')
                }
            });
        });

    }
};