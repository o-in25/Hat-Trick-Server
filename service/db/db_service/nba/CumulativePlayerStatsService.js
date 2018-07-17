let mongoose = require('mongoose');
let CumulativePlayerStatsApi = require('../../../api/api_service/nba/CumulativePlayerStatsApi');
let DbService = require('../../db_service/DbService');
let SchemaManager = require('../../schemas/SchemaManager');
let Schema = mongoose.Schema;
let collection = 'CXNCumulativePlayerStats';
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
                    let Model = mongoose.model(collection, new Schema(SchemaManager.PlayerSchema));
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
    _InsertAllCumulativePlayerStats:  function() {
       return new Promise((resolve, reject) => {
           console.log('Connected to service...');
           DbService.connectToDb().then((db) => {
               CumulativePlayerStatsApi.getCumulativePlayerStats({}, function(res) {
                   // create a new model
                   // with the appropriate schema
                   let Model = mongoose.model(collection, new Schema(SchemaManager.PlayerSchema));
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
    }
};