const Sequelize = require("sequelize");
require("dotenv");
// const sequelize = new Sequelize(`${process.env.DATABASE}`,`${process.env.USER}` ,`${process.env.PASSWORD}`, {
//   host: `${process.env.HOST}`,
//   dialect: 'mysql',
//   operatorsAliases: false,
//   pool: {
//     max: 5,     
//     min: 0,     
//     idle: 10000
//   },
//   port:process.env.DB_PORT
// });
const sequelize =new Sequelize('shoaibdb','root' ,'root', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306,
  operatorsAliases: false,
  pool: {
    max: 5,     
    min: 0,     
    idle: 10000
  }
});
module.exports=sequelize;