const Joi = require("joi");
const { User } = require("../../models");
const { where } = require("sequelize");
const input_schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required();
module.exports = {
    async verifyInput(input) {
        try {
          await input_schema.validateAsync(input);
        } catch (err) {
          throw { message: err.message, status: 400 };
        }
    },
    async register(input) {
        try {
            const { email, password } = input;
            const userExists = await User.findOne({where: {email}})
            if(userExists) {
              throw { 
                message:"user exists!",
                status:404
              } 
            }
            const user = await User.create({email, password})
            return user;
        } 
        catch (err) {
          console.log(err);
          throw(err);
        }
    }
}