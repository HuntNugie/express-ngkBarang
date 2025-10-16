import { Router } from "express";
import { auth } from "../Middlewares/auhtMiddlewarre.js";
const route = Router();

route.get("/check",auth,(req,res)=>{
    res.status(200).json({message:"Token masih valid",user:req.user})
})
export default route