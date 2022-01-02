module.exports = (sequelize, Sequelize) => {
    const GameCard = sequelize.define("gamecard", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        states: {
            type: Sequelize.INTEGER,
            // values: ['played', 'aval', 'inhand']
            value: 0
        },
        // cardId: {
        //     type: Sequelize.UUID,
        //     allowNull: false
        // },
        // gameId: {
        //     type: Sequelize.UUID,
        //     allowNull: false
        // },
    }, {});
    // GameCard.associate = function(models) {
    //     GameCard.belongsTo(models.game, {foreignKey: "gameId"});
    //     GameCard.belongsTo(models.card, {foreignKey: "cardId"});
    //     // GameCard.belongsToMany(models.playercard, {through: "cardinhand"}, {foreignKey: "gamecardId"});
    // };
    return GameCard;
}