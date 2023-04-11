'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Process extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Process.hasMany(models.History, {
        sourceKey: 'id',
        foreignKey: 'processId',
        as: "histories"
       });

       Process.hasMany(models.RelatedPart, {
        sourceKey: 'id',
        foreignKey: 'processId',
        as: "related_parts"
       });
    }
  }
  Process.init({
    cnj: DataTypes.STRING,
    forum: DataTypes.STRING,
    distributedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Process',
  });

  return Process;
};