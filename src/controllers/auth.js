const useCaseRegister = require("../use-cases/auth/register");
const useCaseLogin = require("../use-cases/auth/login");

module.exports = {
    register: async (req,res) => { 
        try {
            const body = {
                email: req.body.email,
                password: req.body.password
            }
            await useCaseRegister.verifyInput(body)
            const result = await useCaseRegister.register(body)
            return res.status(201).json(result)
        } catch (err) {
            return res.status(404).json(err);
        }
    },
    login: async (req,res) => { 
        try {
            const body = {
                email: req.body.email,
                password: req.body.password
            }
            await useCaseLogin.verifyInput(body)
            const result = await useCaseLogin.login(body)
            return res.status(201).json(result)
        } catch (err) {
            return res.status(404).json(err);
        }
    }
}