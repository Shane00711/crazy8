module.exports = (sequelize, Sequelize) => {
  const Player = sequelize.define("players", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    }
  });

  return Player;
};