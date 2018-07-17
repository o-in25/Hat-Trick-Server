let mongoose = require('mongoose');
let CumulativePlayerStatsModel = require('../model/CumulativePlaterStatsModel');
let CumulativePlayerStatsApi = require('../../api/api_service/nba/CumulativePlayerStatsApi');
let ActivePlayerStatsApi = require('../../api/api_service/nba/ActivePlayersApi');
let ActivePlayersModel = require('../model/ActivePlayersModel');
let DbService = require('../db_service/DbService');
module.exports = {
    // inserts cumulative player stats from the MySportsFeed API
    // this will take in an object that has a list of teams
    // ex: {'team':'cleveland'}
    _InsertCumulativePlayerStatsByTeam:  function(params, callback) {
        DbService.connectToDb().then((db) => {
             CumulativePlayerStatsApi.getCumulativePlayerStats(params, function(res) {
                // here, we create a model from an injected model as a
                // param to our function
                let Model = CumulativePlayerStatsModel.CumulativePlayerStatsModel();
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
    },
    _InsertAllCumulativePlayerStats:  function(callback) {
        DbService.connectToDb().then((db) => {

            // just a temporary array
            let temp = [];
            for(let team in temp) {
                CumulativePlayerStatsApi.getCumulativePlayerStats(team, function(res) {
                    // here, we create a model from an injected model as a
                    // param to our function
                    let Model = CumulativePlayerStatsModel.CumulativePlayerStatsModel();
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
            }
        }).catch(callback());
    },
    _InsertAllActivePlayers: function (params, callback) {
        DbService.connectToDb().then((db) => {
            ActivePlayerStatsApi.getActivePlayers(params, function(res) {
                // here, we create a model from an injected model as a
                // param to our function
                let Model = ActivePlayersModel.ActivePlayersModel();
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