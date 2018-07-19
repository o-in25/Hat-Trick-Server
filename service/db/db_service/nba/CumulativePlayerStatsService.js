let mongoose = require('mongoose');
let CumulativePlayerStatsApi = require('../../../api/api_service/nba/CumulativePlayerStatsApi');
let DbService = require('../../db_service/DbService');
let SchemaManager = require('../../schemas/SchemaManager');
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
                   let Model = mongoose.model(collection, new Schema(SchemaManager.StatsSchema));
                   // in order to save the model into the db w
                   // an instance of it must be made
                   console.log('Queuing Entries...');
                   // since our schema no longer matches
                   // our response, we have to
                   // fucking build the query which
                   // fuckin sucks wtf mongoose
                   // or maybe its me idk
                   // here we go
                   let players = [];
                   for(var i = 0; i < res.length; i++) {
                       let player = res[i];
                       players.push({
                           PlayerID: Number(player.player.ID),
                           LastName: player.player.LastName,
                           FirstName: player.player.FirstName,
                           JerseyNumber: player.player.JerseyNumber,
                           Position: player.player.Position,
                           CityID: Number(player.team.ID),
                           City: player.team.City,
                           Name: player.team.Name,
                           Abbreviation: player.team.Abbreviation,
                           GamesPlayed: Number(player.stats.GamesPlayed.text),
                           Fg2PtAtt: Number(player.stats.Fg2PtAtt.text),
                           Fg2PtAttPerGame: Number(player.stats.Fg2PtAttPerGame.text),
                           Fg2PtMade: Number(player.stats.Fg2PtMade.text),
                           Fg2PtMadePerGame: Number(player.stats.Fg2PtMadePerGame.text),
                           Fg2PtPct: Number(player.stats.Fg2PtPct.text),
                           Fg3PtAtt: Number(player.stats.Fg3PtAtt.text),
                           Fg3PtAttPerGame: Number(player.stats.Fg3PtAttPerGame.text),
                           Fg3PtMade: Number(player.stats.Fg3PtMade.text),
                           Fg3PtMadePerGame: Number(player.stats.Fg3PtMadePerGame.text),
                           Fg3PtPct: Number(player.stats.Fg3PtPct.text),
                           FgAtt: Number(player.stats.FgAtt.text),
                           FgAttPerGame: Number(player.stats.FgAttPerGame.text),
                           FgMade: Number(player.stats.FgMade.text),
                           FgMadePerGame: Number(player.stats.FgMadePerGame.text),
                           FgPct: Number(player.stats.FgPct.text),
                           FtAtt: Number(player.stats.FtAtt.text),
                           FtAttPerGame: Number(player.stats.FtAttPerGame.text),
                           FtMade: Number(player.stats.FtMade.text),
                           FtMadePerGame: Number(player.stats.FtMadePerGame.text),
                           FtPct: Number(player.stats.FtPct.text),
                           OffReb: Number(player.stats.OffReb.text),
                           OffRebPerGame: Number(player.stats.OffRebPerGame.text),
                           DefReb: Number(player.stats.DefReb.text),
                           DefRebPerGame: Number(player.stats.DefRebPerGame.text),
                           Reb: Number(player.stats.Reb.text),
                           RebPerGame: Number(player.stats.RebPerGame.text),
                           Ast: Number(player.stats.Ast.text),
                           AstPerGame: Number(player.stats.AstPerGame.text),
                           Pts: Number(player.stats.Pts.text),
                           PtsPerGame: Number(player.stats.PtsPerGame.text),
                           Tov: Number(player.stats.Tov.text),
                           TovPerGame: Number(player.stats.TovPerGame.text),
                           Stl: Number(player.stats.Stl.text),
                           StlPerGame: Number(player.stats.StlPerGame.text),
                           Blk: Number(player.stats.Blk.text),
                           BlkPerGame: Number(player.stats.BlkPerGame.text),
                           BlkAgainst: Number(player.stats.BlkAgainst.text),
                           BlkAgainstPerGame: Number(player.stats.BlkAgainstPerGame.text),
                           Fouls: Number(player.stats.Fouls.text),
                           FoulsPerGame: Number(player.stats.FoulsPerGame.text),
                           FoulsDrawn: Number(player.stats.FoulsDrawn.text),
                           FoulsDrawnPerGame: Number(player.stats.FoulsDrawnPerGame.text),
                           FoulPers: Number(player.stats.FoulPers.text),
                           FoulPersPerGame: Number(player.stats.FoulPersPerGame.text),
                           FoulPersDrawn: Number(player.stats.FoulPersDrawn.text),
                           FoulPersDrawnPerGame: Number(player.stats.FoulPersDrawnPerGame.text),
                           FoulTech: Number(player.stats.FoulTech.text),
                           FoulTechPerGame: Number(player.stats.FoulTechPerGame.text),
                           FoulTechDrawn: Number(player.stats.FoulTechDrawn.text),
                           FoulTechDrawnPerGame: Number(player.stats.FoulTechDrawnPerGame.text),
                           FoulFlag1: Number(player.stats.FoulFlag1.text),
                           FoulFlag1PerGame: Number(player.stats.FoulFlag1PerGame.text),
                           FoulFlag1Drawn: Number(player.stats.FoulFlag1Drawn.text),
                           FoulFlag1DrawnPerGame: Number(player.stats.FoulFlag1DrawnPerGame.text),
                           FoulFlag2: Number(player.stats.FoulFlag2.text),
                           FoulFlag2PerGame: Number(player.stats.FoulFlag2PerGame.text),
                           FoulFlag2Drawn: Number(player.stats.FoulFlag2Drawn.text),
                           FoulFlag2DrawnPerGame: Number(player.stats.FoulFlag2DrawnPerGame.text),
                           Ejections: Number(player.stats.Ejections.text),
                           PlusMinus: Number(player.stats.PlusMinus.text),
                           PlusMinusPerGame: Number(player.stats.PlusMinusPerGame.text),
                           MinSeconds: Number(player.stats.MinSeconds.text),
                           MinSecondsPerGame: Number(player.stats.MinSecondsPerGame.text)
                       })
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
             db.collection(collection).find(params).toArray(function(err, success) {
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
             })
           });
        });
    }
};