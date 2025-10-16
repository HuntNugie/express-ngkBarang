import './style.css'
import router from '../routes/routes.js';
import { register } from '../controllers/registerController.js';
import { login } from '../controllers/loginController.js';
document.addEventListener("click",async(e)=>{
    if(e.target.classList.contains("login")){
        const res = await login();
    }else if(e.target.classList.contains("register")){
        const res = await register();
    }else if(e.target.classList.contains("link-register")){
        e.preventDefault();
        history.replaceState({page:"register"},null,"/register");
        router()
    }else if(e.target.classList.contains("link-login")){
        e.preventDefault();
        history.replaceState({page:"login"},null,"/login");
        router();
    }
})

window.addEventListener("popstate",router);
window.addEventListener("load",router)