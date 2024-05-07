import db from "../models/index";

// list sản phẩm hiển thị trên user
let getListProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const listProducts = await db.Product.findAll({
        where: {
          STATUS: 0,
        },
        attributes: [
          "id",
          "name",
          "introduction",
          "description",
          "size",
          "weight",
          "price",
        ],
        include: [
          {
            model: db.Category,
            as: "category",
            attributes: ["id", "name"],
            required: true,
          },
          {
            model: db.Product_Img,
            as: "Images",
            attributes: ["img"],
            required: true,
          },
        ],
      });

      resolve(listProducts);
    } catch (e) {
      reject(e);
    }
  });
};
let getProductById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await db.Product.findOne({
        where: { id: id },
        attributes: [
          "id",
          "name",
          "size",
          "weight",
          "description",
          "introduction",
          "price",
          "status",
        ],
        include: [
          {
            model: db.Category,
            as: "category",
            attributes: ["id", "name"],
            required: true,
          },
          {
            model: db.Product_Img,
            as: "Images",
            attributes: ["img"],
            required: true,
          },
        ],
      });
      resolve(product);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllProductsByIdCategory = (idCategory) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listProducts = await db.Product.findAll({
        where: {
          id_type: idCategory,
        },
        attributes: [
          "id",
          "name",
          "introduction",
          "description",
          "size",
          "weight",
          "price",
        ],
        include: [
          {
            model: db.Category,
            as: "category",
            attributes: ["id", "name"],
            required: true,
          },
          {
            model: db.Product_Img,
            as: "Images",
            attributes: ["img"],
            required: true,
          },
        ],
      });

      resolve(listProducts);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getListProducts: getListProducts,
  getProductById: getProductById,
  getAllProductsByIdCategory: getAllProductsByIdCategory,
};
