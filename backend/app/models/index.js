const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.player = require("../models/player.model.js")(sequelize, Sequelize);
db.game = require("../models/game.model")(sequelize, Sequelize);
db.gameplayerscore = require("../models/gameplayerscore.model")(sequelize, Sequelize);
db.ingameplayerstatus = require("../models/ingameplayerstatus.model")(sequelize, Sequelize);
db.cards = require("../models/cards.model")(sequelize, Sequelize);
db.cardinhand = require("../models/cardinhand.model")(sequelize, Sequelize);
db.playercards = require("../models/playercards.model")(sequelize,Sequelize);
db.gamecards = require("../models/gamecards.model")(sequelize, Sequelize);
// db.user.hasOne(db.player);
// db.player.belongsTo(db.user, {
//     foreignKey: {
//         type: Sequelize.UUID
//     }
// });

// db.player.belongsToMany(db.game, { through: db.gameplayerscore});
// db.card.belongsToMany(db.playercards, {through: db.cardinhand});
// db.game.belongsToMany(db.player, { through: db.gameplayerscore});
// db.ingameplayerstatus.hasOne(db.gameplayerscore);
// db.playercards.hasMany(db.card);
// db.gameplayerscore.hasOne(db.playercards);
db.player.belongsTo(db.user, {foreignKey: "userId"});
db.user.hasOne(db.player, {foreignKey: "userId"});  
db.player.belongsToMany(db.game, {through: "gameplayerscore"}, {foreignKey: "playerId"});
db.game.belongsToMany(db.player, {through: "gameplayerscore"}, {foreignKey: "gameId"});
db.gameplayerscore.belongsTo(db.player, {foreignKey: "playerId"});
db.gameplayerscore.belongsTo(db.game, {foreignKey: "gameId"});

db.playercards.belongsTo(db.gameplayerscore, {foreignKey: "gamePlayerId"});

db.game.belongsToMany(db.cards, {through: "gamecards"}, {foreignKey: "gameId"});
db.cards.belongsToMany(db.game, {through: "gamecards"}, {foreignKey: "cardId"});
db.gamecards.belongsTo(db.game, {foreignKey: "gameId"});
db.gamecards.belongsTo(db.cards, {foreignKey: "cardId"});

db.playercards.belongsToMany(db.gamecards, {through: "cardinhands"}, {foreignKey: "playercardId"});
db.gamecards.belongsToMany(db.playercards, {through: "cardinhands"}, {foreignKey: "gamecardId"});
db.cardinhand.belongsTo(db.playercards, {foreignKey: "playercardId"});
db.cardinhand.belongsTo(db.gamecards, {foreignKey: "gamecardId"});


module.exports = db;