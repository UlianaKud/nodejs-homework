import { User } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";
import bcrypt from "bcryptjs";
import "dotenv/config";

const singUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  const newUser = await User.create({ email, password: hashPassword });
  console.log(newUser);
  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

export default singUp;
