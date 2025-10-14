import renderLogin from "../src/views/login.js"
import renderDashboard from "../src/views/dashboard.js"
const routes = [
    {path:"/login",view:renderLogin},
    {path:"/dashboard",view:renderDashboard},
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
}

export default router