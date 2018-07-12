let mongoose = require('mongoose');
let CumulativePlayerStatsModel = require('../model/CumulativePlaterStatsModel');
let CumulativePlayerStatsApi = require('../../api/api_service/nba/CumulativePlayerStatsApi');
module.exports = {
    _insert: function() {
        return CumulativePlayerStatsApi.getCumulativePlayerStats({'team':'cleveland-cavaliers'}, function(res) {
            // just get a random entry from the array of player entries
            // this time we will choose the 2nd index
            // this is completely arbitrary tho
            let entry = CumulativePlayerStatsModel.CumulativePlayerStatsModel();
            let Entry = new entry(res[0]);
            Entry.save(function(err, succ) {
                console.log(succ);
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