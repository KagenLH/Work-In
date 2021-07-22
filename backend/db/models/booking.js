'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    listingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
    Booking.belongsTo(models.Listing, { foreignKey: 'listingId' });
  };
  return Booking;
};