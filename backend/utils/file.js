import fs from "fs"
import dotenv from "dotenv"

console.log("Sedang membuat file file !!!!!!!")

dotenv.config();

// mengecek apakah file models nya sudah ada atau belum
if(!fs.existsSync(process.env.PATH_FOLDER)){
    fs.mkdirSync(process.env.PATH_FOLDER)
}

// mengecek apakah jika file users json nya sudah ada atau belum
if(!fs.existsSync(process.env.PATH_USER_JSON)){
    fs.writeFileSync(process.env.PATH_USER_JSON,"[]","utf-8")
}

// mengecek apakah jika file barangs json nya sudah ada atau belum
if(!fs.existsSync(process.env.PATH_BARANG_JSON)){
    fs.writeFileSync(process.env.PATH_BARANG_JSON,"[]","utf-8")
}

