import app from "./app";
import config from "./config";
import { initDb } from "./db";

async function main() {
    try {
        await initDb();
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    } catch (error) {
        console.log(error)
    }

}



main();