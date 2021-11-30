module.exports = (sequelize, Sequelize) => {
    const GamePlayerScore = sequelize.define("gameplayerscore", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        playerId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        gameId: {
            type: Sequelize.UUID,
            allowNull: false
        },
    }, {});
    GamePlayerScore.associate = function(models) {
        // associations can be defined here
        GamePlayerScore.belongsTo(models.player, {foreignKey: "playerId"});
        GamePlayerScore.belongsTo(models.game, {foreignKey: "gameId"});
    };

    return GamePlayerScore;
}