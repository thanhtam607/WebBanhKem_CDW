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

// get product by keyword
let getProductsByKeyword = (keyword) => {
  return axios.get(`/api/getProductsByKeyword?keyword=${keyword}`);
};

let createProduct = (
  id_type,
  name,
  size,
  weight,
  description,
  introduction,
  price,
  images,
  status
) => {
  return axios.post(`/api/createProduct`, {
    id_type,
    name,
    size,
    weight,
    description,
    introduction,
    price,
    images,
    status,
  });
};

let deleteProduct = (id) => {
  return axios.post(`/api/deleteProduct`, { id });
};

let updateProduct = (
  id,
  id_type,
  name,
  size,
  weight,
  description,
  introduction,
  price,
  status
) => {
  return axios.post(`/api/updateProduct`, {
    id,
    id_type,
    name,
    size,
    weight,
    description,
    introduction,
    price,
    status,
  });
};

export {
  getListProducts,
  getProductById,
  getPageCount,
  getAllProductsByIdCategory,
  getProductsByKeyword,
  createProduct,
  updateProduct,
  deleteProduct,
};
