module.exports = function(sequelize, DataTypes) {
	let leads = sequelize.define("Leads", {
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

	return leads;
};