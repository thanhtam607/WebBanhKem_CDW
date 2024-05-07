import express from "express";
import homeController from "../controller/homeController";
import productController from "../controller/productController";
import cartController from "../controller/cartController";
import categoryController from "../controller/categoryController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/api/getListProducts", productController.getListProducts);
  router.get("/api/getProductById", productController.getProductById);

  router.post("/api/createCart", cartController.createCart);
  router.get("/api/getAllCartsByIdUser", cartController.getAllCartsByIdUser);
  router.post("/api/deleteCart", cartController.deleteCart);
  router.post("/api/updateCart", cartController.updateCart);
  router.post("/api/updateStatusCart", cartController.updateStatusCart);

  // Caterory
  router.get("/api/getAllCategories", categoryController.getAllCategories);

  return app.use("/", router);
};

module.exports = initWebRoutes;
