'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    bookingId: DataTypes.INTEGER,
    numStars: DataTypes.DECIMAL,
    content: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Booking, { foreignKey: "bookingId" });
  };
  return Review;
};