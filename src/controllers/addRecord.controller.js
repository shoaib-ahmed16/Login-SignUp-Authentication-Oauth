
const sequelize =require("../config/database");
const Sequelize =require("sequelize");
module.exports=async (req,res)=>{
  const addUser =require("../model/AddRecord")(sequelize.sync(),Sequelize);
  try{
   let user =await addUser.create({firstName:req.body.firstName,lastName:req.body.lastName});
  if(user)
  {
   return res.status(400).send({user});
  }
  }catch(err) {
    res.status(400).send({message:err.message});
}
}