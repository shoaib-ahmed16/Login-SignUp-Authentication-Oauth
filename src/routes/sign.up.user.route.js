
const routers=()=>{
 const {generateToken,register,login,adduser} =require("../controllers/sign.up.user.controller");
 const route =require('express').Router();
 route.post("/register",register);
 route.post("/login",login);
 route.post("/addUser",adduser);
}

module.exports=routers;