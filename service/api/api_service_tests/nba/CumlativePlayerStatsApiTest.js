
let manager = require('../../api_service/ApiServiceManager');
let service = require('../../api_service/ApiService');
let season = '2017-2018-regular';
let parse = require('../../api_service/middleware/TokenParser');
function test() {
    let requestData = manager.buildRequest('nba', season, 'cumulative_player_stats', {'team': 'gsw','position': 'pg'});
    return service.makeRequest(requestData).then((data) => {
        //regex
        let obj = JSON.parse(parse.parseTokens(data));
       // console.log(obj.cumulativeplayerstats.playerstatsentry[1].stats);
    }).catch((err) => {
        console.log('Request failed...');
        throw err;
    });
}

test();
