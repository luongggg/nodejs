import express from "express";
import {
  getAll,
  getDetail,
  create,
  // updatePatch,
  update,
  remove,
} from "../controllers/product.js";
// import { checkPermission } from "../middlewares/checkpermission.js";

const routerProduct = express.Router();

routerProduct.get("/", getAll);
routerProduct.get("/:id", getDetail);
routerProduct.post("/", create);
routerProduct.put("/:id", update);
routerProduct.delete("/:id", remove);

export default routerProduct;