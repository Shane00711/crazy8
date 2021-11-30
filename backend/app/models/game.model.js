module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        game: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        playercount: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: "Private"
        },
        winner: {
            type: Sequelize.STRING,
            defaultValue: "None"
        }
    }, {});

    Game.associate = function(models) {
        // associations can be defined here
        Game.belongsToMany(models.player, {through: "gameplayerscore"}, {foreignKey: "gameId"});
    }
    return Game;
};