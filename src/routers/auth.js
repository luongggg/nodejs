import express from "express";
import { signup,signin ,user } from "../controllers/auth.js";


const routerAuth = express.Router();

routerAuth.post("/signup", signup);
routerAuth.post("/signin", signin);
routerAuth.get("/users",user);

export default routerAuth;