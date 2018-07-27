let ActivePlayerModel = require('../../models/ActivePlayersModel');
let CumulativePlayerStatsModel = require('../../models/CumulativePlayerStatsModel');
let PointGuardRatingModel = require('../../models/PointGuardRatingModel');
let mongoose = require('mongoose');
let CumulativePlayerStatsApi = require('../../../api/api_service/nba/CumulativePlayerStatsApi');
let DbService = require('../../db_service/DbService');
let SchemaManager = require('../../models/schemas/SchemaManager');
let FormulaManager = require('../../logic/nba/FormulaManager');
let Schema = mongoose.Schema;
let collection = 'OverallRating';
let weightedAverage = require('weighted-mean');


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
                    let pointGuard = {
                        PlayerID: !isNaN(index.PlayerID)? index.PlayerID : 0,
                        Fg3PtPct: !isNaN(index.Fg3PtPct)? index.Fg3PtPct : 0,
                        Fg2PtPct: !isNaN(index.Fg2PtPct)? index.Fg2PtPct : 0,
                        FtPct: !isNaN(index.FtPct)? index.FtPct : 0,
                        FgAtt: !isNaN(index.FgAtt)? index.FgAtt : 0,
                        FtAtt: !isNaN(index.FtAtt)? index.FtAtt: 0,
                        Tov: !isNaN(index.Tov)? index.Tov : 0,
                        Ast: !isNaN(index.Ast)? index.Ast : 0,
                        PtsPerGame: !isNaN(index.PtsPerGame)? index.PtsPerGame: 0,
                        MinSecondsPerGame: !isNaN(index.MinSecondsPerGame)? index.MinSecondsPerGame : 0,
                        Fg3PtMade: !isNaN(index.Fg3PtMade)? index.Fg3PtMade : 0,
                        PlusMinus: !isNaN(index.PlusMinus)? index.PlusMinus : 0,
                        Rating: !isNaN(weightedAverage([
                            [15, !isNaN(index.Fg3PtPct)? index.Fg3PtPct : 0],
                            [10, !isNaN(index.Fg2PtPct)? index.Fg2PtPct : 0],
                            [5, !isNaN(index.FtPct)? index.FtPct : 0],
                            [25, !isNaN(FormulaManager.CalaculateFreeThrowRate(index.FtAtt, index.FgAtt))? FormulaManager.CalaculateFreeThrowRate(index.FtAtt, index.FgAtt) : 0],
                            [30, !isNaN(FormulaManager.CalaculateAssistTurnOverRatio(index.Ast, index.Tov))? FormulaManager.CalaculateAssistTurnOverRatio(index.Ast, index.Tov) : 0],
                            [10, !isNaN(FormulaManager.CalculateScoreRate(index.PtsPerGame, index.MinSecondsPerGame))? FormulaManager.CalculateScoreRate(index.PtsPerGame, index.MinSecondsPerGame) : 0],
                            [5, !isNaN(FormulaManager.CalculateEffectiveFieldGoalPercentage(index.Fg3PtMade, index.FgAtt))? FormulaManager.CalculateEffectiveFieldGoalPercentage(index.Fg3PtMade, index.FgAtt) : 0]
                        ]))? weightedAverage([
                            [15, !isNaN(index.Fg3PtPct)? index.Fg3PtPct : 0],
                            [10, !isNaN(index.Fg2PtPct)? index.Fg2PtPct : 0],
                            [5, !isNaN(index.FtPct)? index.FtPct : 0],
                            [25, !isNaN(FormulaManager.CalaculateFreeThrowRate(index.FtAtt, index.FgAtt))? FormulaManager.CalaculateFreeThrowRate(index.FtAtt, index.FgAtt) : 0],
                            [30, !isNaN(FormulaManager.CalaculateAssistTurnOverRatio(index.Ast, index.Tov))? FormulaManager.CalaculateAssistTurnOverRatio(index.Ast, index.Tov) : 0],
                            [10, !isNaN(FormulaManager.CalculateScoreRate(index.PtsPerGame, index.MinSecondsPerGame))? FormulaManager.CalculateScoreRate(index.PtsPerGame, index.MinSecondsPerGame) : 0],
                            [5, !isNaN(FormulaManager.CalculateEffectiveFieldGoalPercentage(index.Fg3PtMade, index.FgAtt))? FormulaManager.CalculateEffectiveFieldGoalPercentage(index.Fg3PtMade, index.FgAtt) : 0]
                        ]) : 0
                    };

                    payload.push(pointGuard);
                }
                let Model = PointGuardRatingModel.PointGuardRatingModel('ratings_');
                Model.insertMany(payload, function(err, docs) {
                    if(err) {
                        throw Error(err);
                    } else {
                        console.log(docs);
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