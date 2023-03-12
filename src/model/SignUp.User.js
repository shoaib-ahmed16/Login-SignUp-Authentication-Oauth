const sequelize =require("../config/database");
const Sequelize =require("sequelize");
module.exports = () => {
  const bcrypt = require("bcrypt");
  const {DataTypes,Model} =Sequelize;
  class UserSignup extends Model {};
   UserSignup.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  midName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

}, { 
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  timestamps: true,
  // I don't want createdAt
  createdAt: false,
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: 'updateTimestamp',
  freezeTableName: true,
  tableName: 'signupuser',
  instanceMethods: {
    generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
    },
    validPassword(password) {
        return bcrypt.compare(password, this.password);
    }
  }
 })

 return UserSignup;
}


