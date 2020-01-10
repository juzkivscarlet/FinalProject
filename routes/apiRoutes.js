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
};