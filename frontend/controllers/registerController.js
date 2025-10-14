import { postData } from "../utils/api.js";
import router from "../routes/routes.js";
const API = "http://localhost:3000"
export const register = ()=>{
    const form = document.querySelector("#registerForm");
    form.addEventListener("submit",async(event)=>{
        event.preventDefault();
        const data = Object.fromEntries(new FormData(form))
        try{
            const res = await postData(`${API}/api/auth/register`,data)
            if(res.status === 200){
                history.replaceState({page:"login"},null,"/login")
                router()
            }
        }catch(error){
            console.log(error)
        }
    })
}