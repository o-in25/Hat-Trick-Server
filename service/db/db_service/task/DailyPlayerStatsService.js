let mongoose = require('mongoose');
let DailyPlayerStatsApi = require('../../../api/api_service/nba/DailyPlayerStatsApi');
let DailyPlayerStatsModel = require('../../model/DailyPlayerStatsModel');
let DbService = require('../../db_service/DbService');
module.exports = {
    // inserts cumulative player stats from the MySportsFeed API
    // this will take in an object that has a list of teams
    // ex: {'team':'cleveland'}

    /**
     * Inserts all active nba players into the db
     * @param params  rquest parameters, in the form of {'fordate:'mmddyyyy', ... }
     * @param callback to do when its done
     * @private
     */
    _InsertAllDailyPlayerStats: function (params, callback) {
        DbService.connectToDb().then((db) => {
            DailyPlayerStatsApi.getDailyPlayerStats(params, function(res) {
                // here, we create a model from an injected model as a
                // param to our function
                let Model = DailyPlayerStatsModel.CumulativePlayerStatsModel();
                // in order to save the model into the db w
                // an instance of it must be made
                for(let player in res) {
                    let dbEntry = new Model(player);
                    dbEntry.save(function(err, success) {

                        if(err) {
                            console.log('Failed to add...');
                            console.log(err);
                            callback(db, err)
                        }  else {
                            console.log('Entry successfully added...');
                            callback(db, success);
                        }
                    });
                }
            });
        }).catch(callback());
    }
};