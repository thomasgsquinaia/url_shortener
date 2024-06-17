const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const urlController = require('../controllers/url');

router.post('/shorten', auth, urlController.shortenUrl
/*
    #swagger.tags = ['url']
    #swagger.summary = 'Shorten Url'
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

router.get('/:shortUrl', urlController.getOriginalUrl
/*
    #swagger.tags = ['url']
    #swagger.summary = 'Search url by shortened url'
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

router.get('/',auth, urlController.getUserUrls
/*
    #swagger.tags = ['url']
    #swagger.summary = 'Search for the url of a specific user by passing the token'
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
router.put('/:id',auth, urlController.updateUrl
/*
    #swagger.tags = ['url']
    #swagger.summary = 'Update the URL by passing the URL ID and placing the Bearer Token of the user you want to update'
    #swagger.security = [{
        "Bearer": []
    }] 
    #swagger.parameters['body'] = {
            in: 'body',
            required:true,
            schema: {
                type: "object",
            }
    }
    #swagger.responses[500] = {
        description: "Server internal error",
        schema: {
            message:"Error",
            status:500
        }
    }
*/
);
router.delete('/:id',auth, urlController.deleteUrl
/*
    #swagger.tags = ['url']
    #swagger.summary = 'Delete the URL by passing the URL ID and placing the Bearer Token of the user you want to update'
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
