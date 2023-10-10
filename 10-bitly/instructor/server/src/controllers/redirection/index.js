import Slug from "../../model/slug";
import { parseMessage } from "../../utils/helper";

const redirect = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    if (!shortUrl) {
      return res.status(400).json({ error: "Invalid URL" });
    }
    const slug = await Slug.findOne({ shortened_link: shortUrl });
    if (!slug) {
      return res.status(404).json({ error: "URL not found" });
    }
    const updatedVisitCount = slug.visit_count + 1;
    await slug.update({ visit_count: updatedVisitCount });
    await slug.save();
    console.log(slug);
    res.redirect(slug.original_link);
  } catch (error) {
    res.status(500).json(parseMessage("Server error", error));
  }
};

export default redirect;
