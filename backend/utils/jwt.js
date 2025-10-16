import jwt from "jsonwebtoken"
import { config } from "dotenv"

config();

const secret = process.env.SECRET_JWT

export const generateToken = data=>{
    const token = jwt.sign(data,secret,{expiresIn:"1h"});
    return token
}

export const verifyToken = token=>{
    const verify = jwt.verify(token,secret)
    return verify
}