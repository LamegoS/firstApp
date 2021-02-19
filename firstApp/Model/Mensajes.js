const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Mensajes extends Model{}

Mensajes.init({
    mensaje:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Fecha:{
        type: DataTypes.DATE,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Mensajes'
});