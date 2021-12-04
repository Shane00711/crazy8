module.exports = (sequelize, Sequelize) => {
    const CardInHand = sequelize.define("cardinhand", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        }
    });
    return CardInHand;
}