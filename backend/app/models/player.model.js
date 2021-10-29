module.exports = (sequelize, Sequelize) => {
  const Player = sequelize.define("players", {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    }
  });

  return Player;
};