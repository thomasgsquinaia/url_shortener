const crypto = require('crypto');

module.exports = {
    generateShortUrl : () => {
      return crypto.randomBytes(3).toString('base64').substring(0, 6);
    }
}
