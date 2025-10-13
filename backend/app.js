import express from "express";
import dotenv from "dotenv"
import route from "./Routes/arg.js"
import "./utils/file.js"

dotenv.config();

const app = express();

// untuk menghandle req.body dari http request jika ada kiriman
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// untuk route nya
app.use("/",route.home)

app.listen(process.env.PORT,()=>console.log(`server berjalan di http://localhost:${process.env.PORT}`))
