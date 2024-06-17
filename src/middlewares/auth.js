const jwt = require('jsonwebtoken');
const { User } = require('../models');

const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return next();
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      throw { 
        message:"user is not found!",
        status:404
      }
    }
    req.user = user;
    next();
  } 
  catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = auth;
