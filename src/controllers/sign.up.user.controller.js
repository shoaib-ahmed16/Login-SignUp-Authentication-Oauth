
const sequelize =require("../config/database");
const Sequelize =require("sequelize");
const jwt =require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const generateToken =(user)=>{
return jwt.sign({user},process.env.SECRET_KEY)
}
const signUpUser =require("../model/SignUp.User")(sequelize.sync(),Sequelize);;
const register =async (req,res) =>{
 try{
  let user =await signUpUser.findOne({where: {email:req.body.email}})
  if(user)
  {
   return res.status(400).send({message:"Email already Exists please use other email to register"});
  }
  const salt = await bcrypt.genSalt(10);
  let body ={
    firstName:req.body.firstName,
    midName:req.body.midName ,
    lastName:req.body.lastName ,
    email:req.body.email,
    password: await bcrypt.hash(req.body.password,salt),
    phoneNo:req.body.phoneNo
  }
  user =await signUpUser.create(body);
  const token = generateToken(user);
  return res.status(200).send({user,token});
 }catch(err)
 {
  res.status(400).send({message:err.message});
 }
}

const login= async (req,res)=>{
 try{
  const user =await signUpUser.findOne({where:{email:req.body.email}})
  if(!user)
  {
   return res.status(400).send("Wrong Email or Password");
  }
  const match = await bcrypt.compare(req.body.password,user.password);
  if(!match){
    return res.status(400).send({message : "Wrong Email or Password"})
  }
  const token = generateToken(user);
  return res.status(200).send({token});
 }catch(err){
  res.status(400).send({message : err.message})
 }
}
module.exports ={register,login}