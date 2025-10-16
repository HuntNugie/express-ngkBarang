import { addUser,findUser } from "../utils/user.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwt.js";

export const registerUser = async(req,res)=>{
    const {username,password,confirmPassword} = req.body;
    if(password !== confirmPassword){
        return res.status(400).json({message:"password dan konfirmasi password salah"})
    }
    const hashPassword = await bcrypt.hash(password,10)
    addUser({username,password:hashPassword})
    res.status(200).json({message:"berhasil registrasi"})
}

export const loginUser = async(req,res)=>{
    try {
    const {username,password} = req.body
    console.log(req.body)
    const data = findUser(username);
    if(!data){
        return res.status(401).json({message:"Username belum terdaftar"})
    } 
    const result = await bcrypt.compare(password,data.password);
    if(!result){
        return res.status(401).json({message:"Username atau password salah"})
    }
    const token = generateToken({username,password})
    
    const cook = res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:'none',
        maxAge:60*1000
    })
        res.status(200).json({message:"Berhasil login"})
    } catch (error) {
        res.status(500).json({message:"terjadi kesalahan"})
    }

}