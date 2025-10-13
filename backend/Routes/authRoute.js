import { Router } from "express";
import { registerUser } from "../Controllers/authController.js";
const route = Router();

route.post("/register",registerUser)

export default route