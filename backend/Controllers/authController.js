import { addUser } from "../utils/user.js";
import bcrypt from "bcrypt"
export const registerUser = async(req,res)=>{
    const {username,password,confirmPassword} = req.body;
    if(password !== confirmPassword){
        return res.status(400).json({message:"password dan konfirmasi password salah"})
    }
    const hashPassword = await bcrypt.hash(password,10)
    addUser({username,password:hashPassword})
    res.status(200).json({message:"berhasil registrasi"})
}