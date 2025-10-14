import './style.css'
import router from '../routes/routes.js';

document.addEventListener("click",e=>{
    e.preventDefault()
    if(e.target.classList.contains("login")){
        e.preventDefault();
        history.pushState(null,null,"/dashboard")
        router()
    }
})

window.addEventListener("popstate",router);
window.addEventListener("load",router)