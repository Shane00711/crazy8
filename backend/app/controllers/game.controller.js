const GameService = require("../services/game.service");  
const GamePlayerScore = require("../services/gameplayerscore.service")
const PlayerService = require("../services/player.service");
exports.creategame = function(req, res) {
    if(!req.body.name) {
        res.status(400).send({ message: "Game name can not be empty" });
    }
    try {
        var player = PlayerService.getPlayerByUsername(req.body.player);
        console.log("player found", player);
        if(player) {
            console.log("player found", player);
            req.body.playerId = player.id;
            GameService.createGame(req, res);
        }
    } catch (err) { 
        res.status(500).send({ message: err.message }); 
    }
};