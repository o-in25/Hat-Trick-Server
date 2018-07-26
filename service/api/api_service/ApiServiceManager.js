// the ApiServiceManager will manage api service requests
// ApiServiceManager.buildRequest(...) will manage the requests
// by building the object that the ApiService will depend on

let btoa = require('btoa');

module.exports = {
    // builds the request object that the ApiService will need
    buildRequest: function (version, sport, season, statType, requestParameters) {
        // ex: buildRequest('nba', '2017-2018', 'plus-minus', {'team':'cleveland-cavaliers, 'position':'pg'}
        // take a object
        // with 2 arrays containing the
        // request and its value
        let res = '';
        let count = 0;
        for(let prop in requestParameters) {
            // will remove the first & on the first param
            if(count == 0) {// if its the first one
                res += requestParameters.hasOwnProperty(prop)?  prop + '=' + requestParameters[prop] : '';
                count++;
            } else {// if its not the first one
                res += requestParameters.hasOwnProperty(prop)?  '&' + prop + '=' + requestParameters[prop] : '';
            }
        }
        return {
            hostname: 'api.mysportsfeeds.com',
            path: '/' + version + '/pull/' + sport + '/' + season + '/' + statType + '.json?' + res,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', "Authorization": 'Basic ' + btoa('eoin' + ':' + 'Texanol12')
            }
        }
    }
};


