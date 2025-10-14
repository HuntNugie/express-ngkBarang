import './style.css'
import router from '../routes/routes.js';
import { register } from '../controllers/registerController.js';
document.addEventListener("click",async(e)=>{
    if(e.target.classList.contains("login")){
        e.preventDefault();
        history.pushState(null,null,"/dashboard")
        router()
    }else if(e.target.classList.contains("register")){
        const res = await register();
    }
})

window.addEventListener("popstate",router);
window.addEventListener("load",router)