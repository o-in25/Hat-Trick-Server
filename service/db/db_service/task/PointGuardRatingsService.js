let ActivePlayerModel = require('../../models/ActivePlayersModel');
let CumulativePlayerStatsModel = require('../../models/CumulativePlayerStatsModel');
let mongoose = require('mongoose');
let CumulativePlayerStatsApi = require('../../../api/api_service/nba/CumulativePlayerStatsApi');
let DbService = require('../../db_service/DbService');
let SchemaManager = require('../../models/schemas/SchemaManager');
let FormulaManager = require('../../logic/nba/FormulaManager');
let Schema = mongoose.Schema;
let collection = 'OverallRating';


// will insert the best point guards
function _InsertPointGuardOverallRatings(params, callback) {
    // find({}).project(
    let payload = null;
    DbService.connectToDb().then((db) => { // get the player stats
        // first, find the player stats
        let Model = CumulativePlayerStatsModel.CumulativePlayerStatsModel('msfdata'); // TODO CHANGE TO PRODUCTION
        return new Promise((resolve, reject) => {
            // get the fields necessary for a 1 guard to have to be considered good
            Model.find({}, 'PlayerID Fg3PtPct Fg2PtPct FtPct FgAtt FtAtt Tov Ast PtsPerGame MinSecondsPerGame Fg3PtMade PlusMinus', function(err, docs) {
                if(err) {
                    reject(err);
                } else {
                    // then do something with it...
                    resolve(docs);
                }
            });
        }).then(playerStats => { // get the player profile
            // we need data from both
            let Model = ActivePlayerModel.ActivePlayerStatsModel('bins');  // TODO CHANGE TO PRODUCTION
            return new Promise((resolve, reject) => {
                Model.find({}, function(err, activePlayers) {
                    if(err) {
                        reject(err);
                    }
                    resolve([playerStats, activePlayers]);
                })
            });
        }).then((payload) => { // get the player profile
            let playerStats = payload[0]; // player stats
            let activePlayers = payload[1]; // active players
            let players = [];
            // TODO PARSE THE OBJECT WITH !hasOwnProperty() FIRST
            playerStats = JSON.parse(JSON.stringify(playerStats));
            activePlayers = JSON.parse(JSON.stringify(activePlayers));
            // for each player stat
            for(let i = 0; i < playerStats.length; i++) {
                let player = playerStats[i];
                console.log(player);
                // match the corresponding profile
                for(let j = 0; j < activePlayers.length; j++) {
                    let profile = activePlayers[j];
                    // returns the player stats and profile
                    if(player.PlayerID == profile.ID) {
                        let temp = player.PlayerID;
                        players.push({temp:[player, profile]});
                    }
                }
            }
            return new Promise((resolve, reject) => { // utilize the list of players
                if(players != null || typeof players !== "undefined") {
                    reject();
                } else {
                    resolve(players);
                }
            });
        }).then((players) => {

        }).catch((err) => {
            throw Error(err);
        })


    }).catch((err) => {
        throw Error(err);
    })

}

_InsertPointGuardOverallRatings();