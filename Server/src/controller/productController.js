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

// get product by keyword
let getProductsByKeyword = async (req, res) => {
  let keyword = req.query.keyword;
  if (!keyword) {
    return res.status(200).json({
      errCode: 0,
      errMessage: "empty keyword",
      data: [],
    });
  }
  let listProducts = await productService.getProductsByKeyword(keyword);
  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    data: listProducts,
  });
};

let createProduct = async (req, res) => {
  try {
    let infor = req.body;
    let data = {
      ID_TYPE: infor.id_type,
      NAME: infor.name,
      SIZE: infor.size,
      WEIGHT: infor.weight,
      DESCRIPTION: infor.description,
      INTRODUCTION: infor.introduction,
      PRICE: infor.price,
      STATUS: infor.status,
      Images: infor.images,
    };
    let product = await productService.createProduct(data);
    return res.status(200).json({
      errCode: 0,
      errMessage: "ok",
      product,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let updateProduct = async (req, res) => {
  try {
    let infor = req.body;
    let data = {
      ID: infor.id,
      ID_TYPE: infor.id_type,
      NAME: infor.name,
      SIZE: infor.size,
      WEIGHT: infor.weight,
      DESCRIPTION: infor.description,
      INTRODUCTION: infor.introduction,
      STATUS: infor.status,
      PRICE: infor.price,
    };
    console.log("data update: ", data);
    let product = await productService.updateProduct(data);
    return res.status(200).json({
      errCode: 0,
      errMessage: "ok",
      product,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  getListProducts: getListProducts,
  getProductById: getProductById,
  getAllProductsByIdCategory: getAllProductsByIdCategory,
  getProductsByKeyword: getProductsByKeyword,
  createProduct: createProduct,
  updateProduct: updateProduct,
};
