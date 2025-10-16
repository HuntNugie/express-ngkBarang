import './style.css'
import tampil from '../routes/routes.js';
import { register } from '../controllers/registerController.js';
import { login } from '../controllers/loginController.js';

document.addEventListener("click",async(e)=>{
    if(e.target.classList.contains("login")){
        const res = await login();
    }else if(e.target.classList.contains("register")){
        const res = await register();
    }else if(e.target.classList.contains("link-register")){
        e.preventDefault();
        tampil("/register")
    }else if(e.target.classList.contains("link-login")){
        e.preventDefault();
       tampil("/login") 
    }
})

window.addEventListener("popstate",()=>{
    tampil(location.pathname)
});
window.addEventListener("load",()=>{
    tampil(location.pathname)
})