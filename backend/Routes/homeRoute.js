import { Router } from "express";
import { index } from "../Controllers/homeControllers.js";

const route = Router();

route.get("/",index)

export default route;
