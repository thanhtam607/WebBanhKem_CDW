import categoryService from "../service/categoryService.js";

let getAllCategories = async (req, res) => {
  let response = await categoryService.getAllCategories();
  return res.status(200).json(response);
};

module.exports = {
  getAllCategories: getAllCategories,
};
