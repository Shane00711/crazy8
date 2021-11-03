module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        game: {
            type: Sequelize.STRING
        },
        playercount: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: "Private"
        },
        winner: {
            type: Sequelize.STRING
        }
    });

    return Game;
};