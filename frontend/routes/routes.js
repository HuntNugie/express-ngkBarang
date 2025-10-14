import renderLogin from "../src/views/login.js"
import renderDashboard from "../src/views/dashboard.js"
const routes = [
    {path:"/login",view:renderLogin},
    {path:"/dashboard",view:renderDashboard},
]
const router = function(){
    const cek = routes.find(route=>route.path === location.pathname)
    const view = cek ? cek.view : ()=>`<h1>404 page not found</h1>`
    return view()
}

export default router