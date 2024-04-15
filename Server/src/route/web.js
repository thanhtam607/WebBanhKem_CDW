import express from "express";
import homeController from "../controller/homeController";
import productController from "../controller/productController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/api/getListProducts", productController.getListProducts)
    // router.get("/getProductById", productController.getProductById);
    return app.use("/", router);
}

module.exports = initWebRoutes;