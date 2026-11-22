import { pool } from "../../db";
import { userInterface } from "./user.interface";
import { genSalt, hash } from "bcrypt-ts";

export const createUserIntoDb = async (payload: userInterface) => {
    const { name, email, password } = payload;

    const salt = await genSalt(10);
    const hashpassword = await hash(password, salt);
    const result = await pool.query(
        `
  INSERT INTO users (name,email,password) VALUES
  ($1,$2,$3) RETURNING * 
    `,
        [name, email, hashpassword],
    );
    // console.log(result); 
    delete result.rows[0].password;
    return result;
};
