import fs, { readSync } from "fs"
import dotenv from "dotenv"

dotenv.config();
const path = process.env.PATH_USER_JSON
export const loadUser = ()=>{
    const read = fs.readFileSync(path)
    return JSON.parse(read)
}
const saveUser = (user)=>{
    fs.writeFileSync(path,user,"utf-8")
}
export const addUser = (add)=>{
    const data = loadUser();
    const result = data.push(add)
    saveUser(JSON.stringify(data))
}