import axios from "axios"
export const postData = async(url,data)=>{
    try {
        const res = await axios.post(url,data,{withCredentials:true})
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getData = async url=>{
    try{
        const res = await axios.get(url,{withCredentials:true})
        return res
    }catch(error){
        console.log(error)
    }
}