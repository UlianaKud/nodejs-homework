import { ctrlWrapper } from "../../decorators/index.js";
import getCurrent from "./getCurrent.js";
import logIn from "./logIn.js";
import logOut from "./logOut.js";
import singUp from "./singUp.js";

export default {
  singUp: ctrlWrapper(singUp),
  logIn: ctrlWrapper(logIn),
  getCurrent: ctrlWrapper(getCurrent),
  logOut: ctrlWrapper(logOut),
};
