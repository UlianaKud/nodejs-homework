import Joi from "joi";

const userSingUp = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default {
  userSingUp,
};
