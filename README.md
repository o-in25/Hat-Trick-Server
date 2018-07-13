<h1>MySportsFeeds API</h1>
Uses the MySportsFeeds API to gather sports statistics about professional athletes. The server uses MySportsFeeds's RESTful API architecture to deliver content such as a player's free throw percentage, where a player played college ball, and more.
<p align="center">
  <img / src="https://pbs.twimg.com/profile_images/779390458892001280/aFHAsc24_400x400.jpg">
</p>
<h2>Rich API</h2>
<code>
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
</code>
