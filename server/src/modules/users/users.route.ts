import { Router } from "express";
import { userController } from "./users.controller";

const router = Router();

router.post("/create", userController.createUser);

export const userRoutes = router; 