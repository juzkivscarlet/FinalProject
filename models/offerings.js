module.exports = function(sequelize, DataTypes) {
	let Offerings = sequelize.define("Offerings", {
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
		commissions: {
			type: DataTypes.DECIMAL(2,2),
			allowNull: false
		}
	});

	Offerings.associate = function(models) {
		Offerings.belongsTo(models.BusinessUsers);
		Offerings.hasMany(models.SalesUsers);
	};

	return Offerings;
};