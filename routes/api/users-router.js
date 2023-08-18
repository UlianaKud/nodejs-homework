import express from "express";
import { validateBody } from "../../decorators/index.js";
import { usersSchemas } from "../../schemas/index.js";
import { usersController } from "../../controllers/index.js";
import { authenticate, upload } from "../../middlewares/index.js";

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateBody(usersSchemas.userSingUp),
  usersController.singUp
);
usersRouter.post(
  "/login",
  validateBody(usersSchemas.userSingUp),
  usersController.logIn
);
usersRouter.get("/current", authenticate, usersController.getCurrent);
usersRouter.post("/logout", authenticate, usersController.logOut);

usersRouter.patch(
  "/avatars",
  upload.single("avatar"),
  authenticate,
  usersController.updateAvatar
);

usersRouter.get("/verify/:verificationToken", usersController.verify)
usersRouter.post("/verify",validateBody(usersSchemas.userEmail), usersController.resendVerify)


export default usersRouter;
