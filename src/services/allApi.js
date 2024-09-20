import axios from "axios";

const base_url="https://mp-server-0vd3.onrender.com"

export const addVideoApi=async(data)=>{
    return await axios.post(`${base_url}/videos`,data)
}

export const getVideosApi=async()=>{
    return await axios.get(`${base_url}/videos`)
}

export const deleteVideoApi=async(id)=>{
    return await axios.delete(`${base_url}/videos/${id}`)
}

export const addCategoryApi=async(data)=>{
    return await axios.post(`${base_url}/categories`,data)
}

export const getCategoryApi=async()=>{
    return await axios.get(`${base_url}/categories`)
}

export const deleteCategoryApi=async(id)=>{
    return await axios.delete(`${base_url}/categories/${id}`)
}

export const addHistoryApi=async(data)=>{
    return await axios.post(`${base_url}/history`,data)
}

export const getHistoryApi=async()=>{
    return await axios.get(`${base_url}/history`)
}

export const deleteHistoryApi=async(id)=>{
    return await axios.delete(`${base_url}/history/${id}`)
}

export const addvideoToCategory=async(data,id)=>{
    return await axios.put(`${base_url}/categories/${id}`,data)
}