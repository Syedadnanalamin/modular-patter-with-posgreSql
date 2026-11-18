import { Router } from "express";
import { productContoller } from "./product.controller";

const router = Router();

router.get("/", productContoller.getAllProducts);


export const productRouter = router; 