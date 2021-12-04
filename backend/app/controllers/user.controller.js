const db = require("../models");
const User = db.user;
const PlayerService = require('../services/player.service');
//find one user
exports.findOne = (req, res) => { 
  User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => { 
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user."
        });
    });
};

//find all users
exports.findAll = (req, res) => {
  User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.search = async function(req, res) {
  //validate request
  if (!req.query.username) {
    res.status(400).send({
      message: "Username cannot be empty!"
    });
    return;
  }
  try {
    let player = await PlayerService.searchPlayerByUsername(req, res);
    if(player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ message: "Player not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message }); 
  }
};

exports.checkplayerstatus = (req, res) => {
  //validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  try {
    PlayerService.checkPlayerGameStatus(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message }); 
  }
}