// the rest apis for all of the cumulative stats
let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
// the model we are using
let Model = require('../../service/db/models/CumulativePlayerStatsModel').CumulativePlayerStatsModel('MySportsFeedExtranet');
let cors = require('cors');


router.get('/stats/cumulativeplayerstats/', cors(), (req, res, next) => {
    Model.find({}, [], (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
});


router.get('/stats/cumulativeplayerstats/:id', cors(), (req, res, next) => {
    let playerId = Number(req.params.id.toString());
    Model.find({PlayerID: playerId}, [], (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
});



router.get('/stats/cumulativeplayerstats/position/:name', cors(), (req, res, next) => {
    let name = req.params.name.toString().toUpperCase();
    Model.find({Position: name}, [], (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
});



router.get('/stats/cumulativeplayerstats/ptspergame/:ppg', cors(), function(req, res, next) {
    let num = req.params.ppg;
    Model.find({PtsPerGame: {$gt: Number(num)}}, ['LastName', 'FirstName', 'PlayerID', 'PtsPerGame'], function(err, data) {
        res.status(200).send(data);
    });
});

router.get('/stats/avg/ptspergame', function(req, res, callback) {
   Model.find({}, ['LastName', 'FirstName', 'PlayerID', 'PtsPerGame'], function(err, payload) {
       let result = 0;
       let size = 0;
       for(let i = 0; i < payload.length; i++) {
           let temp = JSON.parse(JSON.stringify(payload[i]));
           if(temp.PtsPerGame >= 1) {
               console.log(temp.PtsPerGame);
               result += temp.PtsPerGame;
               size++;
           }
       }
      res.status(200).send({total: (result / size)})
   })
});

module.exports = router;
