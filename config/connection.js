// Grabs .env file in order to access encrypted phrases
require('dotenv').config();

// Uses Syquelize to connect to SQL
const Sequelize = require('sequelize');

// Makes a connection
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Exports sequelize
module.exports = sequelize;
