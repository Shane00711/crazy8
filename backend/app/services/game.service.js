const db = require("../models");
const Game = db.game;
const Player = db.player;

module.exports = {
    // Get all games
    getAllGames: (req, res) => {
        Game.findAll({
            include: [
                {
                    model: Player,
                    as: 'players',
                    through: {
                        attributes: ['score']
                    }
                }
            ]
        })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    },

    // Get game by id
    getGameById: (req, res) => {
        Game.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Player,
                    as: 'players',
                    through: {
                        attributes: ['score']
                    }
                }
            ]
        })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    },

    // Create new game
    createGame: (req, res) => {
        Game.create({
            game: req.body.name,
            playercount: req.body.playercount,
            status: req.body.status,
            winner: req.body.winner,
        })
        .then(data => {
            return res.status(200).send(data);
        })
        .catch(err => {
            return res.status(500).send(err);
        });
    },

    // Update game by id
    updateGameById: (req, res) => {
        Game.update({
            status: req.body.status,
            winner: req.body.winner,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    },

    // Delete game by id
    deleteGameById: (req, res) => {
        Game.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    }
}