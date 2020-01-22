module.exports = function(sequelize, DataTypes) {
	let Sales = sequelize.define('Sales', {
		offering: {
			type: DataTypes.STRING,
			allowNull: false
		},
		commission: {
			type: DataTypes.DECIMAL(2,2),
			allowNull: false
		}, 
		salesRep:{
			type: DataTypes.STRING,
			allowNull: false
		},
		businessName:{
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Sales.associate = function(models) {
		// Sales.hasOne(models.SalesUsers);
		// Sales.hasOne(models.BusinessUsers)
	};

	return Sales;
};