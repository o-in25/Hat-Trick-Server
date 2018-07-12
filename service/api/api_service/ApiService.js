// ApiService is the service that will communicate with the
// MySportsFeed api via rest
// (found here: https://www.mysportsfeeds.com/data-feeds/api-docs/)
//

let https = require('https');
let btoa = require('btoa');
let BufferedReader = require('buffer-reader');
let url = require('url');
module.exports = {

    // Goes out to MySportsFeeds and gets whatever
    // request is sent
    // this simple handles the request and knows
    // nothing about how it was made or built
    // ex:
    // { hostname: '...', path: '...',
    // 'headers: {
    // 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('eoin' + ':' + 'Password'
    // }
    makeRequest: function(request) {
        // return a promuse
        return new Promise((resolve, reject) => {
            // the stream will begin as a string
            let str = '';
            https.get(request, (res) => {
                // init the request
                console.log('Building Request...');


                // failed
                res.on('error', (err) => { // error
                    console.log('HTTP Request Failed... ');
                    reject(err);
                });

                // got the url
                // parsing...
                res.on('data', (stream) => { // success
                    let reader = new BufferedReader(stream);
                    try {
                        while(true) {
                            // since buffer cant read end throw err to break
                            str += reader.nextString(1);
                        }
                    } catch(err) {
                        // end of loop
                    }
                });

                // return the promise
                res.on('end', (end) => { // end
                    console.log('Ended...');
                    resolve(str, end);
                })
            })
        });
    },
};