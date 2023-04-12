import express from "express";
import {
  getAll,
  getDetail,
  create,
  update,
  remove,
} from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const routerCategory = express.Router();

routerCategory.get("/", getAll);
routerCategory.get("/:id", getDetail);
routerCategory.post("/",  create);
routerCategory.put("/:id",  update);
routerCategory.delete("/:id",  remove);

export default routerCategory;