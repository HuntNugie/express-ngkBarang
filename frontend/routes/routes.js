import renderLogin from '../src/views/login.js';
import renderDashboard from '../src/views/dashboard.js';
import renderRegister from '../src/views/register.js';
import {auth} from '../middlewares/authMiddleware.js';
import {render} from './render.js';
import { cekPath } from '../utils/path.js';

const routes = [
  {path: '/login', view: renderLogin, page: 'login'},
  {path: '/register', view: renderRegister, page: 'register'},
  {
    path: '/dashboard',
    view: renderDashboard,
    page: 'dashboard',
    middleware: auth,
  },
];

if (location.pathname === '/') {
  history.replaceState ({page: 'login'}, null, '/login');
}

const router = function () {
  return new Promise (async(resolve, reject) => {
    const check = cekPath(routes);
    if(check){
        if(check?.middleware){
            const hasil = await check.middleware();
            if(hasil.status === 200 && location.pathname === "/login"){
                history.replaceState(null,null,"/dashboard")
            }
        }
        resolve(check)
    }else{
        reject(`<h1>404 page not found</h1>`)
    }
  });
};

export const tampil = (path)=>{
    history.replaceState(null,null,path);
    router().then(r=>{
       render(r.view) 
    }).catch(err=>{
        render(err)
    })
}

export default tampil;
