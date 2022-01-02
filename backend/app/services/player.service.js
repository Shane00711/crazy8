const db = require("../models");
const { Op } = require("sequelize");
const Player = db.player;
const User = db.user;
module.exports = {
    //get all players
    getAllPlayers: (req, res) => {  
        Player.findAll().then(players => {
            res.send(players);
        })
    },
    //get player by username  
    async getPlayerByUsername(username) { 
        let player;
        try {
           player = await Player.findOne({where: {username: username}});
        } catch (error) {
            console.log(error)
            return error;
        }
        return player;
    },

    //search for player by username
    async searchPlayerByUsername (req, res) {
        let player;
        try {
            player = await 
                User.findAll({
                    where: {
                        username: {
                            [Op.like]: `%${req.query.username}%`
                        }
                    },
                    include: [
                        {
                            model: Player,
                        }
            ]
                })
        } catch (error) {
            return error;
        }
        return player;
    },
    //check player game status
    checkPlayerGameStatus: (req, res) => {
        Player.findOne({
            where: {
                username: req.params.username
            }
        }).then(player => {
            if(player.ingamestatus === "offline"){
                res.send(true);
            } else {
                res.send(false);
            }
        }).catch(err => {
            res.send(err);
        });
    }
}