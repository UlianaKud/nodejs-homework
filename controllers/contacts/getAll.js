import { Contact } from "../../models/index.js";

const getAll = async (req, res) => {
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner, favorite }, null, { skip, limit }).populate(
    "owner"
  );
  res.json(result);
};

export default getAll;