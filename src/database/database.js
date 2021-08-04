const Sequelize = require('sequelize');

const environment = process.env.NODE_ENV || 'development';
const config = require ('../config/config')[environment];

const sequelize = new Sequelize (
    config.dataase.name,
    config.dataase.user,
    config.dataase.password,
    {
        host: config.dataase.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;
