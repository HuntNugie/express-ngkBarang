import { verifyToken } from "../utils/jwt.js"
export const auth = (req,res,next)=>{
    // ambil cookie token dari request
    const token = req.cookies?.token

    // jika tidak ada token nya

    if(!token){
        return res.status(401).json({message:"akses di tolak"})
    }

    try {
        const decoded = verifyToken(token)
        req.user = decoded
        next();
    } catch (error) {
        if(error.name == "TokenExpiredError"){
            return res.status(401).json({message:"ses telah berakhir"})
        }else{
            return res.status(403).json({message:"token tidak valid"})
        }
    }
}