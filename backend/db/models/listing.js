'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.hasMany(models.Image, { foreignKey: 'listingId' });
    Listing.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Listing;
};