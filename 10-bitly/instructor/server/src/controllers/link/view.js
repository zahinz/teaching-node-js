import Slug from "../../model/slug";
import { parseMessage } from "../../utils/helper";

const viewLink = async (req, res) => {
  try {
    const { id } = req.params;
    const slug = await Slug.findOne({ where: { id } });
    if (slug === null) {
      res.status(404).json(parseMessage("Link not found"));
      return;
    }
    res.status(200).json(parseMessage("Link retrieved", slug));
    return;
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
    return;
  }
};

export default viewLink;
