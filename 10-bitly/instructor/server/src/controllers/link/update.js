import Slug from "../../model/slug";
import { parseMessage } from "../../utils/helper";

const updateLink = async (req, res) => {
  const { original_link } = req.body;
  const { id } = req.params;
  try {
    const slug = await Slug.findOne({ where: { id } });
    if (slug === null) {
      res.status(404).json(parseMessage("Link not found"));
      return;
    }
    await slug.update({ original_link });
    await slug.save();
    res.status(200).json(parseMessage("Link updated", slug));
    return;
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
    return;
  }
};

export default updateLink;
