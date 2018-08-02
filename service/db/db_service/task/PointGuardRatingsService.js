let ActivePlayerModel = require('../../models/ActivePlayersModel');
let CumulativePlayerStatsModel = require('../../models/CumulativePlayerStatsModel');
let PointGuardRatingModel = require('../../models/PointGuardRatingModel');
let mongoose = require('mongoose');
let CumulativePlayerStatsApi = require('../../../api/api_service/nba/CumulativePlayerStatsApi');
let DbService = require('../../db_service/DbService');
let SchemaManager = require('../../models/schemas/SchemaManager');
let Schema = mongoose.Schema;
let collection = 'OverallRating';


// will insert the best point guards
function _InsertPointGuardOverallRatings(params, callback) {
    // find({}).project(
    DbService.connectToDb().then((db) => { // get the player stats
        // first, find the player stats
        let Model = CumulativePlayerStatsModel.CumulativePlayerStatsModel('msfdata'); // TODO CHANGE TO PRODUCTION
        // get the fields necessary for a 1 guard to have to be considered good
        Model.find({Position: 'PG'}, 'PlayerID Fg3PtPct Fg2PtPct FtPct FgAtt FtAtt Tov Ast PtsPerGame MinSecondsPerGame Fg3PtMade PlusMinus', function(err, docs) {
            if(err) {
                throw Error(err);
            } else {
                let payload = [];
                docs = JSON.parse(JSON.stringify(docs));
                for(let i = 0; i < docs.length; i++) {
                    let index = docs[i];
                    let pointGuard = SchemaManager.PointGuardRatingsManager.PointGuardRatingDao(index);
                    payload.push(pointGuard);
                }
                let Model = PointGuardRatingModel.PointGuardRatingModel('foss');
                Model.insertMany(payload, function(err, docs) {
                    if(err) {
                        throw Error(err);
                    } else {
                      //  console.log(docs);
                    }
                });
                // then do something with it...
            }
        });

    }).catch((err) => {
        throw Error("Error connecting to database with given parameters...");
    })

}

_InsertPointGuardOverallRatings();