const get = (req, res) => {
  res.status(200).json({ message: "This is a GET rest api" });
};

const post = (req, res) => {
  const data = req.body;
  res.status(200).json({ message: "This is a POST rest api", data: data });
};

const publicController = { get, post };

export default publicController;
