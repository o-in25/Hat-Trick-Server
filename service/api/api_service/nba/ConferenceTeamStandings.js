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
    getActivePlayers: function(requestParams, callback) {
        // build the request
        let requestData = manager.buildRequest('nba', season, 'conference_team_standings', requestParams);
        // make the request
        return service.makeRequest(requestData).then((data) => {
            let obj = JSON.parse(tokenParser.parseTokens(data));
            /** player stats entry is of type array and returns information about the conference **/
            callback(obj.conferenceteamstandings.conference);
        }).catch((err) => {
            console.log('Request failed...');
            throw err;
        });
    }

};