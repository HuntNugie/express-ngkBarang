export const render = (result)=>{
    const view = result 
    const app = document.getElementById("app")
    app.innerHTML = view();
}