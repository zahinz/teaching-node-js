import { Router } from "express";
import getAllProducts from "../controller/getAllProducts.js";
import getAllCartItems from "../controller/getAllCartItems.js";

const appRoutes = Router();

appRoutes.get("/", getAllProducts);
appRoutes.get("/cart", getAllCartItems);
appRoutes.get("/*", (req, res) => {
  res.render("pages/page-404");
});
export default appRoutes;
