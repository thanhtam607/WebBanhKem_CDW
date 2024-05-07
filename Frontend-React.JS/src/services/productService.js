import axios from "../axios";
const getListProducts = ()=>{
    console.log("fdjfuih")
    return axios.get("/api/getListProducts")
}
const getProductById = (id)=>{
    return axios.get(`/api/getProductById?id=${id}`)
}
const getPageCount = (totalItem, limit)=>{
    return Math.ceil(totalItem/limit)
}
const getProductsByCategory = (category)=>{
    return axios.get(`/api/getProductsByCategory?category=${category}`)
}
const getAllCategoris = (id)=>{
    return axios.get(`/api/getAllCategories`)
}

export {getListProducts, getProductById, getPageCount
, getAllCategoris, getProductsByCategory}