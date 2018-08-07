// the rest apis for all of the cumulative stats
let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let cors = require('cors');
// the model we are using
let Model = require('../../service/db/models/CumulativePlayerStatsModel').CumulativePlayerStatsModel('fosses');


router.get('/ratings/pg/', cors(), function(req, res, next) {
    let num = req.params.ppg;
    Model.find({}, ['PlayerID', 'Rating'], function(err, data) {
        console.log(data);
        res.status(200).send(data);
    });
});

router.get('/ratings/pg/:id', function(req, res, callback) {
    let id = req.params.id;
    Model.find({PlayerID: Number(id)}, ['Rating'], function(err, data) {
        res.status(200).send(data);
    })
});



module.exports = router;
