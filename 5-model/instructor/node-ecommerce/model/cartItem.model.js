import { query } from "../database/index.js";

const cartItemModel = async () => {
  try {
    //   write your own sql to insert cart_items table
    await query("SELECT NOW()");
    console.log("cart_items table created");
  } catch (error) {
    console.log(error);
  }
};

export default cartItemModel;
