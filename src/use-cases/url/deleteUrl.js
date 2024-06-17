const Joi = require("joi");
const { Url } = require("../../models");

const input_schema = Joi.object({
  id: Joi.number().required(),
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
    async delete(input) {
        try {
            const { id, user_id } = input;
            if(user_id == undefined) {
              throw { 
                message:"token undefined!",
                status:404
              }
            }
            const url = await Url.findOne({ where: { id, UserId: user_id, deletedAt: null } });
            if (!url) {
              throw { 
                message:"url is not found!",
                status:404
              };
            }
            url.deletedAt = new Date();
            await url.save();

            return url;
        } 
        catch (err) {
          console.log(err);
          throw(err);
        }
    }
}