import axios from "../axios";
const getListProducts = () => {
  return axios.get("/api/getListProducts");
};
const getProductById = (id) => {
  return axios.get(`/api/getProductById?id=${id}`);
};

let getAllProductsByIdCategory = (id) => {
  return axios.get(`/api/getAllProductsByIdCategory?id=${id}`);
};

const getPageCount = (totalItem, limit) => {
  return Math.ceil(totalItem / limit);
};

export {
  getListProducts,
  getProductById,
  getPageCount,
  getAllProductsByIdCategory,
};
