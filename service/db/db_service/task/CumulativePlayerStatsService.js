let mongoose = require('mongoose');
let CumulativePlayerStatsApi = require('../../../api/api_service/nba/CumulativePlayerStatsApi');
let DbService = require('../../db_service/DbService');
let SchemaManager = require('../../models/schemas/SchemaManager');
let Schema = mongoose.Schema;
let collection = 'MySportsFeedExtranet';
module.exports = {
    /**
     * Inserts cumulative player stats by team
     * but takes in parameters
     // inserts cumulative player stats from the MySportsFeed API
     // this will take in an object that has a list of teams
     // ex: {'team':'cleveland'}
     */
    _InsertCumulativePlayerStats:  function(params) {
        return new Promise((resolve, reject) => {
            console.log('Connected to service...');
            DbService.connectToDb().then((db) => {
                CumulativePlayerStatsApi.getCumulativePlayerStats(params, function(res) {
                    // create a new model
                    // with the appropriate schema
                    let Model = mongoose.model(collection, new Schema(SchemaManager.PlayerStatsManager.PlayerStatsSchema));
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
                        players.push(SchemaManager.PlayerStatsManager.PlayerStatsDao(player));
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
    /**
     * Inserts all stats
     */
    _InsertAllCumulativePlayerStats:  function() {
       return new Promise((resolve, reject) => {
           console.log('Connected to service...');
           DbService.connectToDb().then((db) => {
               CumulativePlayerStatsApi.getCumulativePlayerStats({}, function(res) {
                   // create a new model
                   // with the appropriate schema
                   let Model = mongoose.model(collection, new Schema(SchemaManager.PlayerStatsManager.PlayerStatsSchema));
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
                       players.push(SchemaManager.PlayerStatsManager.PlayerStatsDao(player));
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
    _FindCumulativePlayerStats: function(params, arr) {
        return new Promise((resolve, reject) => {
           DbService.connectToDb().then((db) => {
             let fields = '';
             for(let i = 0; i < arr.length; i++) {
                 fields += arr[i] + ' ';
             }
          //   let Model = mongoose.model(collection, new Schema(SchemaManager.PlayerStatsManager.PlayerStatsSchema));
             Model.find(params, arr, (function(err, success) {
                 if(err) {
                     console.log('Failed to find...');
                     console.log(err);
                     db.close();
                     reject(err);
                 } else {
                     db.close();
                     if(success.length == 0) {
                         console.log('NOT FOUND...');
                         reject(success);
                     } else {
                         console.log('Entry successfully found...');
                         resolve(success);
                     }
                 }
             }));
           });
        });
    },
    _Find: function(db, params, arr) {
        return new Promise((resolve, reject) => {
            let fields = '';
            for(let i = 0; i < arr.length; i++) {
                fields += arr[i] + ' ';
            }
            let Model = mongoose.model(collection, new Schema(SchemaManager.PlayerStatsManager.PlayerStatsSchema));
            Model.find(params, arr, (function(err, success) {
                if(err) {
                    console.log('Failed to find...');
                    console.log(err);
                    db.close();
                    reject(err);
                } else {
                    db.close();
                    if(success.length == 0) {
                        console.log('NOT FOUND...');
                        reject(success);
                    } else {
                        console.log('Entry successfully found...');
                        resolve(success);
                    }
                }
            }));
        })
    }
};