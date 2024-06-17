const Joi = require("joi");
const { Url } = require("../../models");
const shortener = require("../../utils/urlShortener");

const input_schema = Joi.object({
  originalUrl: Joi.string().required(),
  user_id: Joi.number().optional(),
  hostname: Joi.string().optional(),
  protocol: Joi.string().optional(),
}).required();
module.exports = {
    async verifyInput(input) {
        try {
          await input_schema.validateAsync(input);
        } catch (err) {
          throw { message: err.message, status: 400 };
        }
    },
    async create(input) {
        try {
            const { originalUrl, user_id, hostname, protocol } = input;
            const shortUrl = shortener.generateShortUrl();
            let url;

            url = await Url.create({ originalUrl, shortUrl, UserId: user_id   })

            return `${protocol}//${hostname}${hostname=="localhost"?":3001":""}/${url.shortUrl}`
          
        } 
        catch (err) {
          console.log(err);
          throw(err);
        }
    }
}