const sequelize =require("../config/database");
const Sequelize =require("sequelize");
module.exports =() => {
  const {DataTypes,Model} =Sequelize;
  class addRecord extends Model {};
  addRecord.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { 
  sequelize, // We need to pass the connection instance
  modelName: 'UserAdd', // We need to choose the model name
  timestamps: true,
  // I don't want createdAt
  createdAt: false,
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: 'updateTimestamp',
  freezeTableName: true,
  tableName: 'userAdd'
 })

 return addRecord;
}


