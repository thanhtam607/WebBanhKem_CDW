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

// get 5 product by keyword
let getProductsByKeyword = (keyword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listProducts = await db.Product.findAll({
        where: {
          name: { [db.Sequelize.Op.like]: `%${keyword}%` },
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
        limit: 5,
      });

      resolve(listProducts);
    } catch (e) {
      reject(e);
    }
  });
};

let createProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve("Missing required parameter");
      }

      let product = await db.Product.create({
        id_type: data.ID_TYPE,
        name: data.NAME,
        size: data.SIZE,
        weight: data.WEIGHT,
        description: data.DESCRIPTION,
        introduction: data.INTRODUCTION,
        price: data.PRICE,
        status: 0,
      });

      if (product) {
        for (let img of data.Images) {
          await createImage({ id_product: product.id, img: img });
        }
        resolve(product);
      } else {
        resolve("Create product failed");
      }
      resolve(product);
    } catch (e) {
      reject(e);
    }
  });
};

let createImage = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve("Missing required parameter");
      }

      let image = await db.Product_Img.create({
        id_product: data.id_product,
        img: data.img,
        status: 0,
      });

      if (image) {
        resolve(image);
      } else {
        resolve("Create image failed");
      }
      resolve(image);
    } catch (e) {
      reject(e);
    }
  });
};

let updateProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve("Missing required parameter");
      }

      let product = await db.Product.update(
        {
          id_type: data.ID_TYPE,
          name: data.NAME,
          size: data.SIZE,
          weight: data.WEIGHT,
          description: data.DESCRIPTION,
          introduction: data.INTRODUCTION,
          price: data.PRICE,
        },
        {
          where: {
            id: data.ID,
          },
        }
      );

      if (product) {
        resolve(product);
      } else {
        resolve("Update product failed");
      }
      resolve(product);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getListProducts: getListProducts,
  getProductById: getProductById,
  getAllProductsByIdCategory: getAllProductsByIdCategory,
  getProductsByKeyword: getProductsByKeyword,
  createProduct: createProduct,
  updateProduct: updateProduct,
};
