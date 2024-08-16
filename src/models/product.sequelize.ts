const products = (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      id: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeUpdate: (instance) => {
          instance.updatedAt = new Date();
        },
      },
    },
  );
  return products;
};

export default products;
