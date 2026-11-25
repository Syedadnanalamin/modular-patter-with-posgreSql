import { Request, Response } from "express";
import { authService } from "./auth.service";

const login = async (req: Request, res: Response) => {

    try {


        const result = await authService.logIntoDb(req.body);

        res.status(200).json({

            success: true,
            message: "User log in successfully",
            data: result
        })

    } catch (error: any) {

        res.status(500).json({

            success: false,
            message: error?.message,
            data: error

        })


    }


}

export const authController = {
    login

}