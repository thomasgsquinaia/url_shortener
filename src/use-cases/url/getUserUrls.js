const Joi = require("joi");
const { Url } = require("../../models");
const input_schema = Joi.object({
  user_id: Joi.number().optional(),
}).required();
module.exports = {
    async verifyInput(input) {
        try {
          await input_schema.validateAsync(input);
        } catch (err) {
          throw { message: err.message, status: 400 };
        }
    },
    async get(input) {
        try {
            const { user_id } = input;
            if(user_id == undefined) {
              throw { 
                message:"token undefined!",
                status:404
              }
            }
            const urls = await Url.findAll({  where: { UserId: user_id, deletedAt: null }})
            if(!user_id) {
              throw { 
                message:"token is null!",
                status:404
              }
            }
            return urls;
        } 
        catch (err) {
          console.log(err);
          throw(err);
        }
    }
}