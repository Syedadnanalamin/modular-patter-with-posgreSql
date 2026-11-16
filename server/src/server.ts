import express, { Application, Request, Response } from "express";
import { Pool } from "pg";

const app: Application = express()
const port = 3000

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});


app.get('/', (req: Request, res: Response) => {

    res.status(200).json({
        success: true,
        message: "This is the route page"
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})