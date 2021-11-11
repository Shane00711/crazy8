const db = require("../models");
const GamePlayerScore = db.gameplayerscore; 

module.exports = {
    creategameplayerscore: function(req, res) {
        const gameplayerscore = {
            game_id: req.body.game_id,
            player_id: req.body.player_id,
            score: req.body.score
        };
        GamePlayerScore
            .create(gameplayerscore)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the gameplayer score."
                });
            });
    },

    findAll: function(req, res) {
        GamePlayerScore
            .findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving gameplayer scores."
                });
            });
    },

    findByPk: function(req, res) {
        GamePlayerScore
            .findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving gameplayer score with id=" + req.params.id
                });
            });
    },
};

