module.exports = (sequelize, Sequelize) => {
    const CardInHand = sequelize.define("cardinhand", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        playercardId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        gamecardId: {
            type: Sequelize.UUID,
            allowNull: false
        }
    });
    CardInHand.associate = function(model) {
        CardInHand.belongsTo(model.playercards, {foreignKey: "playercardId"});
        CardInHand.belongsTo(model.gamecards, {foreignKey: "gamecardId"});
    }
    return CardInHand;
}