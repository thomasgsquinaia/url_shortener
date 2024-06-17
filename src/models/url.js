const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Url = sequelize.define('Url', {
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    originalUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clicks: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: { 
        type: DataTypes.DATE,
        allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return Url;
};
