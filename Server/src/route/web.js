import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import productController from "../controller/productController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  // user
  router.get("/api/get-all-users", userController.getAllUsers);
  router.post("/api/create-user", userController.handleCreateNewUser);
  router.post("/api/login", userController.userLogin);

  // product
  router.get("/api/get-product-by-id", productController.getProductDetailById);

  return app.use("/", router);
};

module.exports = initWebRoutes;
