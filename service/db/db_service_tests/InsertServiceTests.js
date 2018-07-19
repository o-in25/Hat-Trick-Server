(function() {
    let mongoose = require('mongoose');
    let CumulativePlayerStatsService = require('../db_service/nba/CumulativePlayerStatsService');
    CumulativePlayerStatsService._InsertAllCumulativePlayerStats().then((res) => {
        console.log(res);
    }).catch((err) => {

    });
})();