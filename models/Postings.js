module.exports = (sequelize, DataTypes) => {
  const Postings = sequelize.define("Postings", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    donatedItem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    donatedItemCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // foodbankClaim: {
    //   type: DataTypes.INTEGER,
    // },
  });
  return Postings;
};
