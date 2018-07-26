let ActivePlayerModel = require('../../models/ActivePlayersModel');
let CumulativePlayerStatsModel = require('../../models/CumulativePlayerStatsModel');
let mongoose = require('mongoose');
let CumulativePlayerStatsApi = require('../../../api/api_service/nba/CumulativePlayerStatsApi');
let DbService = require('../../db_service/DbService');
let SchemaManager = require('../../models/schemas/SchemaManager');
let Schema = mongoose.Schema;
let collection = 'OverallRating';


function _InsertPointGuardOverallRatings(params, callback) {
    // find({}).project(
    let payload = null;
    DbService.connectToDb().then((db) => {
        // first, find the player stats
        let Model = CumulativePlayerStatsModel.CumulativePlayerStatsModel('msfdata');
        let payload = new Promise((resolve, reject) => {
            // get the fields necessary for a 1 guard to have to be good
            Model.find({}, 'PlayerID Fg3PtPct Fg2PtPct FtPct FgAtt FtAtt Tov Ast PtsPerGame MinSecondsPerGame Fg3PtMade PlusMinus', function(err, docs) {
                if(err) {
                    reject(err);
                } else {
                    // then do something with it...
                    resolve(docs);
                }
            });
        });
        payload.then(playerStats => {
            // we need data from both
            let Model = ActivePlayerModel.ActivePlayerStatsModel('bins');
            return new Promise((resolve, reject) => {
                Model.find({}, function(err, activePlayers) {
                    if(err) {
                        reject(err);
                    }
                    resolve(playerStats, activePlayers);
                })
            });
        }).then((playerStats, activePlayers) => {
            let players = [];
            playerStats = JSON.parse(JSON.stringify(playerStats));
            activePlayers = JSON.parse(JSON.stringify(activePlayers));
            // we have the stats and the players
            for(let i = 0; i < playerStats.length; i++) {
                let player = playerStats[i];
                console.log(player);
                for(let j = 0; j < activePlayers.length; j++) {
                    let profile = activePlayers[j];
                    console.log(profile);
                    if(player.PlayerID == profile.ID) {
                        let temp = player.PlayerID;
                        players.push({temp:[player, profile]});
                    }
                }
            }
            console.log(players);
        }).catch((err) => {
            throw Error(err);
        })


    }).catch((err) => {
        throw Error(err);
    })

}

_InsertPointGuardOverallRatings();