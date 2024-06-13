import axios from "../axios";
const getAllCategories = () => {
  return axios.get("/api/getAllCategories");
};
const getCategoryName = (id) => {
  return axios.get(`/api/getCategoryName?id=${id}`);
};

export { getAllCategories ,
  getCategoryName};
