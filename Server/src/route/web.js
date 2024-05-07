import express from "express";
import homeController from "../controller/homeController";
import productController from "../controller/productController";
import cartController from "../controller/cartController";
import categoryController from "../controller/categoryController";
import billController from "../controller/billController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/api/getListProducts", productController.getListProducts);
  router.get("/api/getProductById", productController.getProductById);
  router.get(
    "/api/getAllProductsByIdCategory",
    productController.getAllProductsByIdCategory
  );

  router.post("/api/createCart", cartController.createCart);
  router.get("/api/getAllCartsByIdUser", cartController.getAllCartsByIdUser);
  router.post("/api/deleteCart", cartController.deleteCart);
  router.post("/api/updateCart", cartController.updateCart);
  router.post("/api/updateStatusCart", cartController.updateStatusCart);

  // Caterory
  router.get("/api/getAllCategories", categoryController.getAllCategories);
  router.post("/api/createCategory", categoryController.createCategory);
  router.post("/api/updateCategory", categoryController.updateCategory);
  router.post("/api/deleteCategory", categoryController.deleteCategory);

  // get bills by id user
  router.get("/api/getAllBillsByIdUser", billController.getAllBillsByIdUser);
  router.get("/api/getBillById", billController.getBillById);
  // update status bill
  router.post("/api/updateStatusBill", billController.updateStatusBill);

  return app.use("/", router);
};

module.exports = initWebRoutes;
