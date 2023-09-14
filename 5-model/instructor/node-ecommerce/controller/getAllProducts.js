const getAllProducts = (req, res) => {
  // insert sql selct query then render product card
  const test = "Hello world";
  res.render("pages/index", { title: test });
};

export default getAllProducts;
