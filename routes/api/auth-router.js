import express from "express";
import { validateBody } from "../../decorators/index.js";
import { usersSchemas } from "../../schemas/index.js";
import { usersController } from "../../controllers/index.js";

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(usersSchemas.userSingUp), usersController.singUp);

export default usersRouter;
