import express, { Application, Request, Response } from "express";
import { productRouter } from "./modules/products/product.route";
const app: Application = express();

app.use("/api/v1/products", productRouter);


export default app; 
