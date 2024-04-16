import axios from "../axios";
const getListProducts = ()=>{
    console.log("fdjfuih")
    return axios.get("/api/getListProducts")
}
const getProductById = (id)=>{
    return axios.get("/api/getProductById?id=", {id:id})
}

export {getListProducts, getProductById}