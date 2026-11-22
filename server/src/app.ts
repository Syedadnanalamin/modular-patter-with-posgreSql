import express, { Application, Request, Response } from "express";
import { productRouter } from "./modules/products/product.route";
import { userRoutes } from "./modules/users/users.route";
const app: Application = express();
app.use(express.json())

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {


    res.status(200).json({ success: true, message: "This is route page" })
})


export default app; 
