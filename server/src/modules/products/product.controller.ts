import { Request, Response } from "express";

const getAllProducts = (req: Request, res: Response) => {

    try {
        res.status(200).json({
            success: true,
            message: "This is the product  page"
        })

    } catch (error) {
        console.log(error)
    }


}

export const productContoller = {
    getAllProducts

}