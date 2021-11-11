const GameService = require("../services/game.service");  

exports.creategame = function(req, res) {
    if(!req.body.name) {
        res.status(400).send({ message: "Game name can not be empty" });
    }
    try {
        GameService.createGame(req, res);
    } catch (err) { 
        res.status(500).send({ message: err.message }); 
    }
};