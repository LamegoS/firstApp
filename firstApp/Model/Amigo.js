const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Amigo extends Model{}

Amigo.init({
    amigo:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Amigo'
});