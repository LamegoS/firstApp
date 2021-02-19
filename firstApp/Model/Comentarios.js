const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Comentarios extends Model{}

Comentarios.init({
    texto:{
        type: DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize,
    modelName: 'Comentarios'
});