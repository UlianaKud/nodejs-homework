import { Contact } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";


const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ result, message: "Contact delete" });
};


export default deleteById;


