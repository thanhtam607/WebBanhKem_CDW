import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  // user
  router.get("/api/get-all-users", userController.getAllUsers);
  router.post("/api/login", userController.userLogin);

  return app.use("/", router);
};

module.exports = initWebRoutes;
