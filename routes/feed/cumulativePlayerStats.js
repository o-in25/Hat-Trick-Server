// the rest apis for all of the cumulative stats
let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
// the model we are using
let Model = require('../../service/db/models/CumulativePlayerStatsModel').CumulativePlayerStatsModel('MySportsFeedExtranet');


router.get('/ptspergame/:ppg', function(req, res, next) {
    let num = req.params.ppg;
    Model.find({PtsPerGame: {$gt: Number(num)}}, ['LastName', 'FirstName', 'PlayerID', 'PtsPerGame'], function(err, data) {
        res.status(200).send(data);
    });
});

router.get('/avg/ptspergame', function(req, res, callback) {
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
