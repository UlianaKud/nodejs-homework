import express from "express";
import { contactsController } from "../../controllers/index.js";
import { validateBody } from "../../decorators/index.js";
import { contactsSchemas } from "../../schemas/index.js";
import { isEmptyBody } from "../../middlewares/index.js";

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.add
);

router.delete("/:contactId", contactsController.deleteById);

router.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.updateById
);

export default router;
