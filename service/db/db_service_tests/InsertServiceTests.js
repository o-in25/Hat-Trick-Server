(function() {
    /**
     *
     *     let mongoose = require('mongoose');
     let ActivePlayersService = require('../db_service/nba/ActivePlayersService');
     ActivePlayersService._InsertAllActivePlayers().then((succ) => {
            console.log(succ)
        }).catch((err) => {

    });
     */

    let mongoose = require('mongoose');
    let ActivePlayersService = require('../db_service/task/CumulativePlayerStatsService');
    ActivePlayersService._FindCumulativePlayerStats({}, []).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
})();