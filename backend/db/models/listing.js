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
    Listing.hasMany(models.Image, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true});
    Listing.belongsTo(models.User, { foreignKey: 'userId' });
    Listing.hasMany(models.Booking, { foreignKey: 'listingId', onDelete:'CASCADE', hooks: true});
  };
  return Listing;
};