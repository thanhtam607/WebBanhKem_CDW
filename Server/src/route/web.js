import express from "express";
import homeController from "../controller/homeController";
import productController from "../controller/productController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/api/getListProducts", productController.getListProducts)
    router.get("/api/getProductById", productController.getProductById);
    router.get("/api/getProductsByCategory", productController.getProductsByCategory);
    router.get("/api/getAllCategories", productController.getAllCategories);
    router.get("/api/getHotProducts", productController.getHotProducts);
    return app.use("/", router);
}

module.exports = initWebRoutes;