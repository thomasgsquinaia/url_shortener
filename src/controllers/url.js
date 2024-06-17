const useCaseShortenUrl = require("../use-cases/url/shortenUrl");
const useCaseGetOriginalUrl = require("../use-cases/url/getOriginalUrl");
const useCaseGetUserUrls = require("../use-cases/url/getUserUrls");
const useCaseUpdateUrl = require("../use-cases/url/updateUrl");
const useCaseDeleteUrl = require("../use-cases/url/deleteUrl");

module.exports = {
    shortenUrl: async (req,res) => { 
        try {
            const input = {
                originalUrl: req.body.originalUrl,
                user_id: req?.user?.id
            }
            await useCaseShortenUrl.verifyInput(input)
            const result = await useCaseShortenUrl.create(input)
            return res.status(201).json(result)
        } catch (err) {
            return res.status(404).json(err);
        }
    },
    getOriginalUrl: async (req,res) => { 
        try {
            const { shortUrl } =  req.params
            const result = await useCaseGetOriginalUrl.get(shortUrl)
            return res.status(201).json(result)
        } catch (err) {
            console.log(err);
            return res.status(404).json(err);
        }
    },
    getUserUrls: async (req,res) => { 
        try {
            const input = {
                user_id: req?.user?.id
            }
            await useCaseGetUserUrls.verifyInput(input)
            const result = await useCaseGetUserUrls.get(input)
            return res.status(201).json(result)
        } catch (err) {
            console.log(err);
            return res.status(404).json(err);
        }
    },
    updateUrl: async (req,res) => { 
        try {
            const input = { 
                id: req?.params?.id,
                originalUrl: req?.body?.originalUrl,
                user_id: req?.user?.id
            }
            await useCaseUpdateUrl.verifyInput(input)
            const result = await useCaseUpdateUrl.update(input)
            return res.status(201).json(result)
        } catch (err) {
            return res.status(404).json(err);
        }
    },
    deleteUrl: async (req,res) => { 
        try {
            const input = {
                id: req?.params?.id,
                user_id: req?.user?.id
            }
            await useCaseDeleteUrl.verifyInput(input)
            const result = await useCaseDeleteUrl.delete(input)
            return res.status(200).json(result)
        } catch (err) {
            return res.status(404).json(err);
        }
    }
}