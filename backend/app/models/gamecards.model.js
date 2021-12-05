module.exports = (sequelize, Sequelize) => {
    const GameCard = sequelize.define("gamecard", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        states: {
            type: Sequelize.ENUM,
            values: ['played', 'aval', 'inhand']
        },
        cardId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        gameId: {
            type: Sequelize.UUID,
            allowNull: false
        },
    }, {});
    GameCard.associate = function(models) {
        GameCard.belongsTo(models.game, {foreignKey: "gameId"});
        GameCard.belongsTo(models.card, {foreignKey: "cardId"});
        GameCard.belongsToMany(models.playercard, {through: "cardinhand"}, {foreignKey: "gamecardId"});
    };
    return GameCard;
}