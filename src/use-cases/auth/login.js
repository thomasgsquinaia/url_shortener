const Joi = require("joi");
const { User } = require("../../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    async login(input) {
        try {
            const { email, password } = input;
            const user = await User.findOne({where: { email }})
            const passCompare = await bcrypt.compare(password, user.password)
            if(!user) {
                throw { 
                    message:"user is not found!",
                    status:404
                } 
            }
            if(!user || !passCompare) {
                throw { 
                    message:"invalid credencials",
                    status:404
                } 
            }
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)

            return {token};
        } 
        catch (err) {
          console.log(err);
          throw(err);
        }
    }
}