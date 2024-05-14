import productService from "../Service/productService";
let getListProducts = async (req, res) => {
  // ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS
  let listProducts = await productService.getListProducts();

  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    listProducts,
  });
};
let getProductById = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 0,
      errMessage: "ok",
      product: "",
    });
  }
  let product = await productService.getProductById(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    product,
  });
};

let getAllProductsByIdCategory = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 0,
      errMessage: "empty category",
      data: [],
    });
  }
  let listProducts = await productService.getAllProductsByIdCategory(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    data: listProducts,
  });
};

module.exports = {
  getListProducts: getListProducts,
  getProductById: getProductById,
  getAllProductsByIdCategory: getAllProductsByIdCategory,
};
