// Imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// Imports our database connection from config.js
const sequelize = require('../config/connection.js');

// Initializes Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// Creates Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Exports Tag model
module.exports = Tag;
