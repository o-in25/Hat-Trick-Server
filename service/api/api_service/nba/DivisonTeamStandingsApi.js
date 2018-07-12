let manager = require('../ApiServiceManager');
let service = require('../ApiService');
let tokenParser = require('../middleware/TokenParser');

let season = '2017-2018-regular';
module.exports = {
    getSeason: function(str) {
        season = str;
    },
    setSeason: function() {
        return season;
    },
    getDailyPlayerStats: function(requestParams, callback) {
        // build the request
        let requestData = manager.buildRequest('nba', season, 'daily_player_stats', requestParams);
        // make the request
        return service.makeRequest(requestData).then((data) => {
            let obj = JSON.parse(tokenParser.parseTokens(data));
            /** player stats entry is of type array and returns information about the player's daily stats **/
            callback(obj.divisionteamstandings.division);
        }).catch((err) => {
            console.log('Request failed...');
            throw err;
        });
    }

};