'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    listingId: DataTypes.INTEGER,
    url: DataTypes.TEXT
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Listing, { foreignKey: 'listingId', onDelete: 'CASCADE' });
  };
  return Image;
};