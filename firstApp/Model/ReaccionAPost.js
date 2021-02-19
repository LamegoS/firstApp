const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class ReaccionAPost extends Model{}

ReaccionAPost.init({
    tipo:{
        type: DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize,
    modelName: 'Reaccion A Post'
});