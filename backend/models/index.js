const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://admin:admin@localhost:5432/postgres"
);

const Crime = sequelize.define("Crime", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Crime };
