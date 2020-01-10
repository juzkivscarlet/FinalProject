// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var businessUser = sequelize.define("businessUser", {
    businessName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[3, 25]
        }
    },
    industry:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [5, 25]
        }
      },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 35]
      }
    }
  });
  
//   businessUser.associate = function(models) {
//     businessUser.hasMany(models.modules, {
//       onDelete: "cascade"
//     });
//   };
  
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  businessUser.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  businessUser.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  
  return businessUser;
};