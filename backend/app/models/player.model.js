module.exports = (sequelize, Sequelize) => {
  const Player = sequelize.define("player", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    ingamestatus: {
      type: Sequelize.STRING,
      defaultValue: "offline"
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false
    },
  }, {});

  Player.associate = function(models) {
    // associations can be defined here
    Player.belongsTo(models.user, {foreignKey: "userId"});
    Player.belongsToMany(models.game, {through: "gameplayerscore"}, {foreignKey: "playerId"});
  };
  return Player;
};