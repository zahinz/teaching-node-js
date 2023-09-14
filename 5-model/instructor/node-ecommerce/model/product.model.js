import { query } from "../database/index.js";

const productModel = async () => {
  try {
    //   write your own sql to insert products table
    await query("SELECT NOW()");
    console.log("products table created");
  } catch (error) {
    console.log(error);
  }
};

export default productModel;
