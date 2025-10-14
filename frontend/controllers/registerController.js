import { postData } from "../utils/api.js";

const API = "http://localhost:3000"
export const register = ()=>{
    const form = document.querySelector("#registerForm");
    form.addEventListener("submit",async(event)=>{
        event.preventDefault();
        const data = Object.fromEntries(new FormData(form))
        try{
            console.log("berhasil")
            const res = await postData(`${API}/api/auth/register`,data)
        }catch(error){
            console.log("error")
        }
    })
}