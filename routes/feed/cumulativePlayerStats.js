let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let Model = require('../../service/db/models/CumulativePlayerStatsModel').CumulativePlayerStatsModel('MySportsFeedExtranet');

router.get('/', function(req, res, next) {
    Model.find({JerseyNumber: 0}, [], function(err, data) {
        console.log(data);
        res.status(200).send(data);
    });
});

module.exports = router;
