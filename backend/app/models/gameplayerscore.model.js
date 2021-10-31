module.exports = (sequelize, Sequelize) => {
    const GamePlayerScore = sequelize.define("gameplayerscore", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        order: {
            type: Sequelize.INTEGER
        },
        cardcount: {
            type: Sequelize.INTEGER
        }
    })
}