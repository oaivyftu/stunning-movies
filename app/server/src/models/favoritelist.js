"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FavoriteList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FavoriteList.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  FavoriteList.init(
    {
      filmName: DataTypes.STRING,
      premiereDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "FavoriteList",
    }
  );
  return FavoriteList;
};
