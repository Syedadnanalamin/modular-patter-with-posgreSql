import { Pool } from "pg";
import config from "../config";


const pool = new Pool({
    connectionString: config.connection_string,
});


export const initDb = async () => {
    try {
        await pool.query("SELECT 1");
        console.log("database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error;
    }

}


