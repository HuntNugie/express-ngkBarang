import express from "express";
import dotenv from "dotenv"
import route from "./Routes/arg.js"
import "./utils/file.js"
import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
// untuk menghandle req.body dari http request jika ada kiriman
app.use(express.json());
app.use(cookieParser())

// untuk route nya
app.use("/",route.home)
app.use("/api/auth",route.auth)
app.use("/api/dashboard",route.dashboard)
// error handling
app.use((req,res)=>{
    res.status(404).json({page:"page not found"})
})
app.listen(process.env.PORT,()=>console.log(`server berjalan di http://localhost:${process.env.PORT}`))
