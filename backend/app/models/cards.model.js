module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define("cards", {
       id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true 
       },
       suits: {
           type: Sequelize.STRING
       },
       color: {
           type: Sequelize.STRING
       },
       value: {
           type: Sequelize.STRING
       }
    });

    return Card;
}