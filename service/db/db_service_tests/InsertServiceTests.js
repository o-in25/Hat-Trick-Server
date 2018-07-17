(function() {
    let mongoose = require('mongoose');
    let CumulativePlayerStatsService = require('../db_service/nba/CumulativePlayerStatsService');
    CumulativePlayerStatsService._InsertAllCumulativePlayerStats().then((success) => {
        console.log(success);
    }).catch((error) => {
        throw error;
    });
})();