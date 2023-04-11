'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RelatedPart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RelatedPart.belongsTo(models.Process);
    }
  }
  RelatedPart.init({
    name: DataTypes.TEXT,
    role: DataTypes.ENUM("author","defendant"),
    processId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RelatedPart',
  });
  return RelatedPart;
};