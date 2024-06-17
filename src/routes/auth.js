const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/register', authController.register
/*
    #swagger.tags = ['auth']
    #swagger.summary = 'User Register'
    #swagger.security = [{
        "Bearer": []
    }] 
    #swagger.responses[500] = {
        description: "Server internal error",
        schema: {
            message:"Error",
            status:500
        }
    }
*/
);

router.post('/login', authController.login
/*
    #swagger.tags = ['auth']
    #swagger.summary = 'Login'
    #swagger.security = [{
        "Bearer": []
    }] 
    #swagger.responses[500] = {
        description: "Server internal error",
        schema: {
            message:"Error",
            status:500
        }
    }
*/
);

module.exports = router;
