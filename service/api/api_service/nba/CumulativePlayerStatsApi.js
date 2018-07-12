let manager = require('../ApiServiceManager');
let service = require('../ApiService');
let season = '2017-2018-regular';
let tokenParser = require('../middleware/TokenParser');
module.exports = {
    getSeason: function(str) {
        season = str;
    },
    setSeason: function() {
        return season;
    },
    getCumulativePlayerStats: function(requestParams, callback) {
        // build the request
        let requestData = manager.buildRequest('nba', season, 'cumulative_player_stats', requestParams);
        // make the request
        return service.makeRequest(requestData).then((data) => {
            let obj = JSON.parse(tokenParser.parseTokens(data));
            console.log(obj);
            console.log('Retrieved stat...');
            /** player stats entry is of type array and returns information about the player **/
            callback(obj.cumulativeplayerstats.playerstatsentry);
        }).catch((err) => {
            console.log('Request failed...');
            throw err;
        });
    }

};