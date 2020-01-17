module.exports = function(sequelize, DataTypes) {
	let Sales = sequelize.define('Sales', {
		commission: {
			type: DataTypes.DECIMAL(2,2),
			allowNull: false
		}, 
		approved: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	});

	Sales.associate = function(models) {
		Sales.hasOne(models.SalesUsers);
		Sales.hasOne(models.BusinessUsers)
	};

	return Sales;
};