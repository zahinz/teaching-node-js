import Slug from "../../model/slug";
import { parseMessage } from "../../utils/helper";

const deleteLink = async (req, res) => {
  const { id } = req.params;
  const slug = await Slug.findOne({ where: { id } });
  if (slug === null) {
    res.status(404).json(parseMessage("Link not found"));
    return;
  }
  try {
    await slug.destroy();
    res.status(200).json(parseMessage("Link deleted"));
    return;
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
    return;
  }
};

export default deleteLink;
