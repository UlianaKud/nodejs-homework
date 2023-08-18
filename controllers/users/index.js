import { ctrlWrapper } from "../../decorators/index.js";
import getCurrent from "./getCurrent.js";
import logIn from "./logIn.js";
import logOut from "./logOut.js";
import singUp from "./singUp.js";
import updateAvatar from "./updateAvatar.js";
import verify from "./verify.js";
import resendVerify from "./resendVerify.js";

export default {
  singUp: ctrlWrapper(singUp),
  logIn: ctrlWrapper(logIn),
  getCurrent: ctrlWrapper(getCurrent),
  logOut: ctrlWrapper(logOut),
  updateAvatar: ctrlWrapper(updateAvatar),
  verify: ctrlWrapper(verify),
  resendVerify: ctrlWrapper(resendVerify),
};
