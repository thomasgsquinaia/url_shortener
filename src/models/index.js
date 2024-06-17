const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

const User = require('./user')(sequelize);
const Url = require('./url')(sequelize);

User.hasMany(Url);
Url.belongsTo(User);

module.exports = { sequelize, User, Url };
