import { Contact } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favotite } = req.body;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    favotite,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export default updateStatusContact;
