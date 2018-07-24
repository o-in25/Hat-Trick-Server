let ApiServiceManager = require('../ApiServiceManager');
let ApiService = require('../ApiService');
let TokenParser = require('../middleware/TokenParser');
// the season
let season = '2017-2018-regular';
module.exports = {
    // for getting/setting season
    getSeason: function(str) { season = str; },
    setSeason: function() { return season; },
    getCumulativePlayerStats: function(requestParams, callback) {
        console.log('Getting stats...');
        // build the request
        let requestData = ApiServiceManager.buildRequest('nba', season, 'cumulative_player_stats', requestParams);
        // make the request
        ApiService.makeRequest(requestData).then((data) => {
            let obj = JSON.parse(TokenParser.parseTokens(data));
            console.log('Retrieved stat...');
            /** player stats eyntry is of type array and returns information about the player **/
            callback(obj.cumulativeplayerstats.playerstatsentry);
        }).catch((err) => {
            console.log('Request failed...');
            console.log(err);
            throw err;
        });
    }

};