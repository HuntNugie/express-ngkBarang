import renderLogin from "../src/views/login.js"
import renderDashboard from "../src/views/dashboard.js"
import renderRegister from "../src/views/register.js"

const routes = [
    {path:"/login",view:renderLogin,page:"login"},
    {path:"/register",view:renderRegister,page:"register"},
    {path:"/dashboard",view:renderDashboard,page:"dashboard"},
]
const router = function(){
    if(location.pathname === "/"){
            history.replaceState({page:"login"},null,"/login");
            return router();
    }
    const cek = routes.find(route=>route.path === location.pathname)
    const view = cek ? cek.view : ()=>`<h1>404 page not found</h1>`
    const app = document.getElementById("app")
    app.innerHTML = view();
    history.pushState({page:cek?.page},null,cek?.path)
}

export default router