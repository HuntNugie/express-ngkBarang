import axios from "axios"
export const postData = async(url,data)=>{
    try {
        const res = await axios.post(url,data,{withCredentials:true})
    } catch (error) {
        console.log(error)
    }
}