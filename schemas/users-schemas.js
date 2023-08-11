import Joi from "joi";

const userSingUp = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string(),
});

export default {
  userSingUp,
};
