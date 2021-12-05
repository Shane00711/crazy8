module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define("cards", {
       id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true 
       },
       suit: {
           type: Sequelize.STRING
       },
       color: {
           type: Sequelize.STRING
       },
       value: {
           type: Sequelize.STRING
       }
    });
    Card.associate = function(models) {
        Card.belongsToMany(models.game, {through: "gamecard"}, {foreignKey: "cardId"});
    }
    return Card;
}