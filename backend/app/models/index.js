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
db.card = require("../models/cards.model")(sequelize, Sequelize);
db.cardinhand = require("../models/cardinhand.model")(sequelize, Sequelize);
db.playercards = require("../models/playercards.model")(sequelize,Sequelize);
db.user.hasOne(db.player);
db.player.belongsTo(db.user, {
    foreignKey: {
        type: Sequelize.UUID
    }
});
// db.card.hasOne(db.playercards);
// db.player.hasOne(db.gameplayerscore);
// db.game.hasOne(db.gameplayerscore);
db.player.belongsToMany(db.game, { through: db.gameplayerscore});
db.card.belongsToMany(db.playercards, {through: db.cardinhand});
// db.game.belongsToMany(db.player, { through: db.gameplayerscore});
// db.ingameplayerstatus.hasOne(db.gameplayerscore);
// db.playercards.hasMany(db.card);
db.gameplayerscore.hasOne(db.playercards);
module.exports = db;