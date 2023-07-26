import Joi from "joi";

const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string(),
});

export default {
  contactsAddSchema,
};
