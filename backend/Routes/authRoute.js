import { Router } from "express";
import { registerUser,loginUser } from "../Controllers/authController.js";
import { auth } from "../Middlewares/auhtMiddlewarre.js";
const route = Router();

route.post("/register",registerUser)
route.post("/login",loginUser)
export default route