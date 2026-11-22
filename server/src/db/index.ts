import { Pool } from "pg";
import config from "../config";


export const pool = new Pool({
    connectionString: config.connection_string,
});


export const initDb = async () => {
    try {
        // await pool.query("SELECT 1");

        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
            
            `)
        console.log("database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error;
    }

}


