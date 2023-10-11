const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  `postgres://jdxhurqz:eQLdfAiFAcBsbN2Fx_YMMlfXOOkT0YDX@silly.db.elephantsql.com/jdxhurqz`,
  { dialect: "postgres" }
);

module.exports = sequelize;
