const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class DatosPrivados extends Model{}

DatosPrivados.init({
    correo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    celular:{
        type: DataTypes.STRING,
        allowNull:false
    },
    contraseña:{
        type: DataTypes.STRING,
        allowNull:false
    },
    campus:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Datos Privados'
});