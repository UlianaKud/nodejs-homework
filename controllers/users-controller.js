import { User } from "../models/index.js";
// import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const singUp = async (req, res) => {
  const newUser = await User.create(req.body);
};

export default {
  singUp: ctrlWrapper(singUp),
};
