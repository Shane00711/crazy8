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

exports.checkname = async function(req, res) {
    console.log("checkname", req.query);
    if(!req.query.name) {
        res.status(400).send({ message: "Game name can not be empty" });
        return;
    }
    try {
        let gamename = await GameService.checkGameName(req.query.name);
        console.log("gamename", gamename);
        if(gamename) {
            res.status(200).send({ message: "Game name already exists" });
        } else {
            res.status(200).send({ message: "Game name available" });
        }
    } catch (err) { 
        res.status(500).send({ message: err.message }); 
    }
}