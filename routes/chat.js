const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Chat = sequelize.define("Chat", {
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Chat;
