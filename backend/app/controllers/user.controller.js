const db = require("../models");
const User = db.user;

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