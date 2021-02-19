const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Posts extends Model{}

Posts.init({
    fecha:{
        type: DataTypes.DATE,
        allowNull:false
    },
    texto:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Posts'
});