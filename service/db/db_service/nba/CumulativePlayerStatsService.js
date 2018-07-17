let mongoose = require('mongoose');
let CumulativePlayerStatsModel = require('../../model/CumulativePlaterStatsModel');
let CumulativePlayerStatsApi = require('../../../api/api_service/nba/CumulativePlayerStatsApi');
let DbService = require('../../db_service/DbService');
let PlayerSchema = require('../../schemas/PlayerSchema');
let Schema = mongoose.Schema;
module.exports = {
    model: function() {
        return CumulativePlayerStatsModel.CumulativePlayerStatsModel();
    },

    // inserts cumulative player stats from the MySportsFeed API
    // this will take in an object that has a list of teams
    // ex: {'team':'cleveland'}

    /**
     * Inserts cumulative player stats by team
     * @param params
     * @param callback
     * @private
     */
    _InsertCumulativePlayerStatsByTeam:  function(params) {
      return new Promise((resolve, reject) => {
          DbService.connectToDb().then((db) => {
              CumulativePlayerStatsApi.getCumulativePlayerStats(params).then((res) => {
                  // here, we create a model from an injected model as a
                  // param to our function
                  let Model = CumulativePlayerStatsModel.CumulativePlayerStatsModel;
                  // in order to save the model into the db w
                  // an instance of it must be made
                  for(let player in res) {
                      let dbEntry = new Model(player);
                      dbEntry.save(function(err, success) {

                          if(err) {
                              console.log('Failed to add...');
                              console.log(err);
                              reject(db, err)
                          }  else {
                              console.log('Entry successfully added...');
                              resolve(db, success);
                          }
                      });
                  }
              });
          }).catch(function (err) {
              console.log('Failed to connect to database...');
              throw err;
          });
      });
    },
    _InsertAllCumulativePlayerStats:  function() {
       return new Promise((resolve, reject) => {
           console.log('Connected to service...');
           DbService.connectToDb().then((db) => {
               CumulativePlayerStatsApi.getCumulativePlayerStats({}, function(res) {
                   console.log(res[0].player);
                   // here, we create a model from an injected model as a
                   // param to our function
                   let Model = mongoose.model('CollectionDB', new Schema(PlayerSchema.PlayerSchema));
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