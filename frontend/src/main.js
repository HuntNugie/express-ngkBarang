import './style.css'
import router from '../routes/routes.js';
const app = document.querySelector("#app")

window.onload = function(){
     if(location.pathname === "/"){
        history.replaceState({page:"login"},null,"/login");
    }
}

 app.innerHTML = router();