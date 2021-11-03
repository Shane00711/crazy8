module.exports = (sequelize, Sequelize) => {
    const PlayerCards = sequelize.define("playercards", {
        id : {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true 
        },

    });

    return PlayerCards;
}