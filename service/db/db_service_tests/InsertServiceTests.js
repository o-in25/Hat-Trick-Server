(function() {

         let mongoose = require('mongoose');
     let ActivePlayersService = require('../db_service/task/CumulativePlayerStatsService');
     ActivePlayersService._InsertCumulativePlayerStats().then((succ) => {
//           / console.log(succ)
        }).catch((err) => {

    });

    /**
     *  let mongoose = require('mongoose');
     let ActivePlayersService = require('../db_service/task/ActivePlayersService');
     ActivePlayersService._InsertAllActivePlayers({}).then((res) => {
        //console.log(res);
    }).catch((err) => {
        console.log(err);
    });
     */
})();