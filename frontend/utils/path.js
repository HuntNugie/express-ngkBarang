export const cekPath = (route)=>{
    const cek = route.find(r=>r.path ===  location.pathname)
    return cek
}