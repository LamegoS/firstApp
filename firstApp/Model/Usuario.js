const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Usuario extends Model{}

Usuario.init({
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    alias:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Usuario'
});