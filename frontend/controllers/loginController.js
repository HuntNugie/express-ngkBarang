import { postData } from "../utils/api.js";
import router from "../routes/routes.js";

const api = "http://localhost:3000"

export const login = ()=>{
    const form = document.querySelector("#loginForm");
    form.addEventListener("submit",async(e)=>{
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form))
        try {
        const result = await postData(`${api}/api/auth/login`,data)
        if(result.status === 200){
            history.replaceState({page:"dashboard"},null,"/dashboard")
            router()
        }
        } catch (error) {
            console.log(error.message)
        }
    })
}