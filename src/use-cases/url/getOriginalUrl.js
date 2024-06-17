const { Url } = require("../../models");

module.exports = {
    async get(shortUrl) {
        try {
            const url = await Url.findOne({ where: { shortUrl, deletedAt: null } })
            if(!url) {
              throw { 
                message:"url is not found!",
                status:404
              }
            }
            url.clicks++;
            await url.save()
            
            return (url.originalUrl);
        } 
        catch (err) {
          console.log(err);
          throw(err);
        }
    }
}