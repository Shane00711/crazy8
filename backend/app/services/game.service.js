const db = require("../models");
const Game = db.game;
const Player = db.player;
const GamePlayerScore = db.gameplayerscore;

module.exports = {
    // Get all games
    getAllGames: (req, res) => {
        Game.findAll({
            include: [
                {
                    model: Player,
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
                id: req.query.id
            },
            include: [
                {
                    model: Player,
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
            playercount: req.body.players.length,
            status: req.body.status,         
        })
        .then(newgame => {
            Player.findAll({ where: { id: req.body.players }})
            .then(players => {
                if(players.length > 0) {
                    players.forEach(player => {
                        player.addGame(newgame)
                        .then((newgamescore) => {
                            console.log("Game Added ", newgamescore);
                        }).catch(err => {
                            res.status(500).send(err);
                        });
                    });
                    res.status(200).send({ message: "Game created successfully" });
                } else {
                    res.status(400).send({ message: "No players found" });  
                }
            })
            .catch(err => {
                res.status(500).send(err);
            });
        }).catch(err => {   
            res.status(500).send(err);
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
    },

    async checkGameName(name) {
        let game;
        try {
            game = Game.findOne({where: { game: name}});
        } catch (err) {
            return err;
        };
        return game;
    },

    //generatet a new collection of card of the new game
    generatecards: (req, res) => {
        return res.status(200).send("still working on this");
    }
};