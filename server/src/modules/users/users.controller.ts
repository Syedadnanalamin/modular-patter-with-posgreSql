import { Request, Response } from "express";
import { createUserIntoDb } from "./users.service";

const createUser = async (req: Request, res: Response) => {

    try {

        const result = await createUserIntoDb(req.body);
        res.status(201).json({ success: true, message: "User created successfully", data: result });
    }
    catch (error: any) {

        res.status(500).json({ success: false, message: "database oparation failed" })
    }

}


export const userController = {

    createUser
}