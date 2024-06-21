import express from "express";
import homeController from "../controller/homeController";
import productController from "../controller/productController";
import cartController from "../controller/cartController";
import categoryController from "../controller/categoryController";
import billController from "../controller/billController";
import userController from "../controller/userController";
import imageController from "../controller/imageController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  // User
  router.post("/api/register", userController.handleCreateNewUser);
  router.post("/api/login", userController.userLogin);
  router.post('/api/send-email', userController.sendMail);
  router.get('/api/checkMail', userController.checkMail);
  // update role
  router.post("/api/updateRole", userController.updateRole);
  router.post("/api/updatePass", userController.updatePass);

  router.get("/api/getListProducts", productController.getListProducts);
  router.get("/api/getProductById", productController.getProductById);
  router.get(
    "/api/getAllProductsByIdCategory",
    productController.getAllProductsByIdCategory
  );
  // get product by keyword
  router.get(
    "/api/getProductsByKeyword",
    productController.getProductsByKeyword
  );
  // create product
  router.post("/api/createProduct", productController.createProduct);
  // update product
  router.post("/api/updateProduct", productController.updateProduct);
  // delete product
  router.post("/api/deleteProduct", productController.deleteProduct);

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
  router.get("/api/getCategoryName", categoryController.getCategoryName);

  // get bills by id user
  router.get("/api/getAllBillsByIdUser", billController.getAllBillsByIdUser);
  router.get("/api/getBillById", billController.getBillById);
  // update status bill
  router.post("/api/updateStatusBill", billController.updateStatusBill);
  router.post("/api/createBill", billController.createBill);
  router.post('/api/create_payment_url', billController.create_payment_vnpayurl );
  // get all bills
  router.get("/api/getAllBills", billController.getAllBills);
  router.get("/api/getBillStatisticsForCurrentMonth", billController.getBillStatisticsForCurrentMonth)
  router.get("/api/getTotalBillForCurrentMonth", billController.getTotalBillForCurrentMonth)
  router.get("/api/sumProBillTotal", billController.sumProBillTotal)
  router.get("/api/getSalesPercentageForCat", billController.getSalesPercentageForCat)

  // update image
  router.post("/api/updateImage", imageController.updateImage);
  // delete image
  router.post("/api/deleteImage", imageController.deleteImage);
  return app.use("/", router);
};
module.exports = initWebRoutes;