const path = require('path');
const router = require('express').Router();
// const apiRoutes = require('./apiRoutes');

const db = require('../models');

// router.use('/api', apiRoutes);

router.route('/test').get((req,res) => {
	res.json({test: 'hello world'});
});

router.use((req,res) => {
	res.sendFile(path.join(__dirname,'../client/build/index.html'));
});

router.route('/api').get((req,res) => {
	db.SalesUsers.findAll({}).then(data => {
		res.json({data:data});
	}).catch(err => {
		res.status(401).json(err);
	});
});

router.route('/api/signup').post((req, res) => {
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

module.exports = router;