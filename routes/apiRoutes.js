const db = require('../models');
const bcrypt = require('bcryptjs');
const passport = require('../config/passport');
require('dotenv').config();

module.exports = app => {
    app.get('/api', (req,res) => {
        db.SalesUsers.findAll({}).then(data => {
            res.json({data:data});
        }).catch(err => {
            res.status(401).json(err);
        });
    });

    app.post('/api/signup', (req, res) => {
        db.SalesUsers.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.lastNameuserName,
            email: req.body.lastNameemail,
            password: req.body.lastNamepassword,
          })
          .then(function () {
            // res.redirect(307, "/api/login");
          })
          .catch(function (err) {
            res.status(401).json(err);
          });
    });
};