module.exports = (sequelize, Sequelize) => {
    const InGamePlayerStatus = sequelize.define("gameplayerstatus", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    return InGamePlayerStatus;
}