module.exports = function(sequelize, DataTypes) {
	let Modules = sequelize.define("Modules", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		time: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});


	return Modules;
};