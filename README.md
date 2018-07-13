<h1>MySportsFeeds API</h1>
Uses the MySportsFeeds API to gather sports statistics about professional athletes. The server uses MySportsFeeds's RESTful API architecture to deliver content such as a player's free throw percentage, where a player played college ball, and more.
<p align="center">
  <img / src="https://pbs.twimg.com/profile_images/779390458892001280/aFHAsc24_400x400.jpg">
</p>
<h2>Rich API</h2>
<pre>
<code>    
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
</code></pre>
