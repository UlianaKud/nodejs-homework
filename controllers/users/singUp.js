import { User } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";
import bcrypt from "bcryptjs";
import "dotenv/config";
import gravatar from "gravatar";
import path from "path";

const singUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatar = gravatar.url(email,{protocol: 'https'});
  const newUser = await User.create({ email, password: hashPassword, avatarURL:  avatar});
 

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
    avatarURL: avatar,
  });
};

export default singUp;
