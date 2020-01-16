module.exports = function(sequelize, DataTypes) {
	let offerings = sequelize.define("Offerings", {
		product: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		priceRange: {
			type: DataTypes.STRING,
			allowNull: false
		},
		business: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	return offerings;
};