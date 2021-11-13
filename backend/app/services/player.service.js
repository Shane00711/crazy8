const db = require("../models");
const Player = db.player;
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
    searchPlayerByUsername: (req, res) => {
        Player.findOne({
            where: {
                username: req.params.username
            }
        }).then(player => {
            res.send(player);
        }).catch(err => {
            res.send(err);
        });
    }
}