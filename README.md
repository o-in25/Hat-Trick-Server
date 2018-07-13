<h1>Hat Trick Server</h1>
The Hat Trick server is the content server for the (soon-to-be) Hat Trick sports statistics application. This application is both a reqrite and an upgrade to the SportsStats application. Hat Trick the MySportsFeeds API to gather sports statistics about professional athletes. The server uses MySportsFeeds's RESTful API architecture to deliver content such as a player's free throw percentage, where a player played college ball, and more.
<p align="center">
  <img / src="https://pbs.twimg.com/profile_images/779390458892001280/aFHAsc24_400x400.jpg">
</p>
<h2>Rich API</h2>
<p>The MySportsFeeds RESTful APIs provides full support for getting stats such as active players or cumulative player stats. The Hat Trick API server consumes these HTTP requests and provides a rich and compact service for retrieving them. </p>
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
