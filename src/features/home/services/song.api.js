import axios from "axios";

const api =axios.create({
    baseURL:"https://backend-2-2w0z.onrender.com/",
    withCredentials:true
})

export async function getSong({mood}) {
    const response =await api.get("/api/song?mood="+mood)
    return response.data
}

