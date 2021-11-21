const GameService = require("../services/game.service");  
const GamePlayerScore = require("../services/gameplayerscore.service")
const PlayerService = require("../services/player.service");
exports.creategame = function(req, res) {
    if(!req.body.players.length > 0) {
        res.status(400).send({ message: "Please select at least 1 other player" });
        return;
    }
    if(!req.body.gamename) {
        res.status(400).send({ message: "Please specify a Game Name" });
        return;
    }
    try {
        var newgame = GameService.createGame(req, res);
        console.log("Game Created: ", newgame);
        if(newgame) {
            req.body.newgame = newgame;
            var newgameplayerscore = GamePlayerScore.createGamePlayerScore(req, res);    
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
        if(gamename) {
            res.status(200).send({ message: "Game name already exists" });
        } else {
            res.status(200).send({ message: "Game name available" });
        }
    } catch (err) { 
        res.status(500).send({ message: err.message }); 
    }
}