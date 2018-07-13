<h1 align="center">Hat Trick Server</h1>
The Hat Trick server is the content server for the (soon-to-be) Hat Trick sports statistics application. This application is both a reqrite and an upgrade to the SportsStats application. Hat Trick the MySportsFeeds API to gather sports statistics about professional athletes. The server uses MySportsFeeds's RESTful API architecture to deliver content such as a player's free throw percentage, where a player played college ball, and more.
<h4>Courtesy of the MySportsFeeds API</h4>
<a href="https://www.mysportsfeeds.com/data-feeds/api-docs/">Click here for API documentation</a>
<p align="center">
<img src="https://pbs.twimg.com/profile_images/779390458892001280/aFHAsc24_400x400.jpg">
</p>
<h1 align="center">Features</h1>
<h3>Rich API</h3>
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
<h3>Flexibility That Scales</h3>
<p>The Hat Trick Server takes advantage of MongoDB's NoSQL schema achitecture, which allows for seemless integration with MySportsFeeds. As MySportsFeeds API's changes, Hat Trick's schemas naturally follow.</p>
<pre><code>https://api.mysportsfeeds.com/v1.2/pull/nba/{season-name}/cumulative_player_stats.{format}</code></pre>
<pre>
<code>
team={list-of-teams} (filter teams)
player={list-of-players} (filter players)
position={list-of-positions} (filter player positions)
country={list-of-countries} (filter player countries of birth)
playerstats={list-of-player-stats} (filter player stats)
sort={sort-specifier} (sort the feed's content)
offset={offset-specifier} (filter results starting at the given offset)
limit={limit-specifier} (limit the maximum # of results)
force={force-if-not-modified} (force content)
</code>
</pre>
<pre>
<code>
 let PlayerSchema = {
          player: {
              ID: String,
                  LastName: String,
                  FirstName: String,
                  JerseyNumber: String,
                  Position: String
          },
          team: {
              ID: String,
                  City: String,
                  Name: String,
                  Abbreviation: String
          },
          stats: {
              GamesPlayed: {
                  abbreviation: String,
                      text: String
              },
              Fg2PtAtt: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg2PtAttPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg2PtMade: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg2PtMadePerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg2PtPct: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg3PtAtt: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg3PtAttPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg3PtMade: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg3PtMadePerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fg3PtPct: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FgAtt: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FgAttPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FgMade: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FgMadePerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FgPct: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FtAtt: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FtAttPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FtMade: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FtMadePerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FtPct: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              OffReb: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              OffRebPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              DefReb: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              DefRebPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Reb: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              RebPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Ast: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              AstPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Pts: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              PtsPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Tov: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              TovPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Stl: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              StlPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Blk: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              BlkPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              BlkAgainst: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              BlkAgainstPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Fouls: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulsPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulsDrawn: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulsDrawnPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulPers: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulPersPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulPersDrawn: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulPersDrawnPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulTech: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulTechPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulTechDrawn: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulTechDrawnPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulFlag1: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulFlag1PerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulFlag1Drawn: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulFlag1DrawnPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulFlag2: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulFlag2PerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulFlag2Drawn: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              FoulFlag2DrawnPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              Ejections: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              PlusMinus: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              PlusMinusPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              MinSeconds: {
                  category: String,
                      abbreviation: String,
                      text: String
              },
              MinSecondsPerGame: {
                  category: String,
                      abbreviation: String,
                      text: String
              }
          }
      };
</code>
</pre>
<h3>CRUD Services. Managed.</h3>
<p>Need not worry about building GET requests. The Hat Trick Server handles building requests. All you need to do, is supply your request parameters - or let the Hat Trick Server supply them for you.</p>
<pre>
<code>
buildRequest: function (sport, season, statType, requestParameters) {
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
            path: '/v1.2/pull/' + sport + '/' + season + '/' + statType + '.json?' + res,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', "Authorization": 'Basic ' + btoa('user' + ':' + 'password')
            }
        }
    }
</code>
</pre>
