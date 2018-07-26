let mongoose = require('mongoose');
let ActivePlayersStatsApi = require('../../../api/api_service/nba/ActivePlayersApi');
let DbService = require('../../db_service/DbService');
let SchemaManager = require('../../models/schemas/SchemaManager');
let Schema = mongoose.Schema;
let collection = 'BIN';
module.exports = {
    /**
     * Inserts cumulative player stats by team
     * but takes in parameters
     // inserts cumulative player stats from the MySportsFeed API
     // this will take in an object that has a list of teams
     // ex: {'team':'cleveland'}
     */
    _InsertActivePlayer:  function(params) {
        return new Promise((resolve, reject) => {
            console.log('Connected to service...');
            DbService.connectToDb().then((db) => {
                ActivePlayersStatsApi.getAllActivePlayers(params, function(res) {
                    // create a new model
                    // with the appropriate schema
                    let Model = mongoose.model(collection, new Schema(SchemaManager.PlayerProfileManager.PlayerProfileSchema));
                    // in order to save the model into the db w
                    // an instance of it must be made
                    console.log('Queuing Entries...');
                    Model.insertMany(res, function(err, success) {
                        if(err) {
                            console.log('Failed to add...');
                            console.log(err);
                            db.close();
                            reject(err)
                        }  else {
                            console.log('Entry successfully added...');
                            db.close();
                            resolve(success);
                        }
                    });
                });
            }).catch(() => {
                throw "Unsuccessful connection to database";
            });
        })
    },
    /**
     * Inserts all stats
     */
    _InsertAllActivePlayers:  function() {
        return new Promise((resolve, reject) => {
            console.log('Connected to service...');
            DbService.connectToDb().then((db) => {
                ActivePlayersStatsApi.getAllActivePlayers({}, function(res) {
                    // create a new model
                    // with the appropriate schema
                    let Model = mongoose.model(collection, new Schema(SchemaManager.PlayerProfileManager.PlayerProfileSchema));
                    // in order to save the model into the db w
                    // an instance of it must be made
                    console.log('Queuing Entries...');
                    // since our schema no longer matches
                    // our response, we have to
                    // build an array for the response
                    let players = [];
                    for(var i = 0; i < res.length; i++) {
                        let player = res[i];
                        // TODO: build the dao with a manager and not a literal
                        players.push(SchemaManager.PlayerProfileManager.PlayerProfileDao(player));
                    }
                    Model.insertMany(players, function(err, success) {
                        if(err) {
                            console.log('Failed to add...');
                            console.log(err);
                            db.close();
                            reject(err)
                        }  else {
                            console.log('Entry successfully added...');
                            db.close();
                            resolve(success);
                        }
                    });
                });
            }).catch(() => {
                throw "Unsuccessful connection to database";
            });
        })
    },
};