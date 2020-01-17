module.exports = function(sequelize, DataTypes) {
	let Leads = sequelize.define("Leads", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phoneNumber: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		business: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Leads.associate = function(models) {
		Leads.hasMany(models.SalesUsers);
	};

	return Leads;
};