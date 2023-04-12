import express from "express";
import categoryRouter from "./category";
import routerAuth from "./auth";
import routerProduct from "./product";
const router = express.Router();

router.use("/products", routerProduct);
router.use("/categories", categoryRouter);
router.use("/auth", routerAuth);

export default router;