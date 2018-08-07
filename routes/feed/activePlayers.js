// the rest apis for all of the cumulative stats
let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
// the model we are using
// TODO ORGANIZE THE MODEL NAMES IN PRODUCTION
let Model = require('../../service/db/models/ActivePlayersModel').ActivePlayerStatsModel('bins');
let cors = require('cors');


router.get('/stats/activeplayers/', cors(), (req, res, next) => {
    Model.find({}, [], (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
});

router.get('/stats/activeplayers/position/:name', cors(), (req, res, next) => {
    let name = req.params.name.toString().toUpperCase();
    console.log(name);
    Model.find({Position: name}, [], (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
});

router.get('/stats/activeplayers/:id', cors(), (req, res, next) => {
    let playerId = Number(req.params.id.toString());
    Model.find({PlayerID: playerId}, [], (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
});




module.exports = router;
