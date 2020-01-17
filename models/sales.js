module.exports = function(sequelize, DataTypes) {
	let sales = sequelize.define('Sales', {
		salesRep: {
			type: DataTypes.STRING,
			allowNull: false
		},
		commission: {
			type: DataTypes.DECIMAL(2,2),
			allowNull: false
		}, 
		approved: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	});

	return sales;
};