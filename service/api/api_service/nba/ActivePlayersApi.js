let manager = require('../ApiServiceManager');
let service = require('../ApiService');
let tokenParser = require('../middleware/TokenParser');

// by default the season is the most current
let season = '2017-2018-regular';
module.exports = {
    // if the season needs to be changed there is
    // implementation to do so
    getSeason: function(str) { season = str; },
    setSeason: function() { return season; },
    // returns all active players with specified parameters
    // always takes a callback receiving the data
    getActivePlayers: function(requestParams, callback) {
        // build the request
        let requestData = manager.buildRequest('nba', season, 'active_players', requestParams);
        // make the request
        return service.makeRequest(requestData).then((data) => {
            let obj = JSON.parse(data);
            /** player stats entry is of type array and returns information about the player **/
            callback(obj.activeplayers.playerstatsentry);
        }).catch((err) => {
            console.log('Request failed...');
            throw err;
        });
    }

};