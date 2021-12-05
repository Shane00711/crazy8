module.exports = (sequelize, Sequelize) => {
    const PlayerCards = sequelize.define("playercards", {
        id : {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true 
        },
        cardCount : {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        gamePlayerId : {
            type: Sequelize.UUID,
            allowNull: false
        }

    });
    PlayerCards.associate = function(models) {
       PlayerCards.belongsTo(models.gameplayerscore, {foreignKey: "gameplayerId"});
       PlayerCards.belongsToMany(models.gamecards, {through: "cardinhand"}, {foreignKey: "playerCardId"});
    }

    return PlayerCards;
}