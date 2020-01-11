const path = require('path');
const express = require('express');
const router = express();
// const apiRoutes = require('./apiRoutes');

const db = require('../models');

// router.use('/api', apiRoutes);

router.get('/test', (req,res) => {
	res.json({test: 'hello world'});
});

// router.use((req,res) => {
// 	res.sendFile(path.join(__dirname,'../client/build/index.html'));
// });

router.get('/api', (req,res) => {
	db.SalesUsers.findAll({}).then(data => {
		res.json({data:data});
	}).catch(err => {
		res.status(401).json(err);
	});
});

router.post('/api/signup', (req, res) => {
	db.SalesUsers.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.userName,
		email: req.body.email,
		password: req.body.password,
	})
	.then(function (data) {
		// res.redirect(307, "/api/login");
		res.json({data:data});
	})
	.catch(function (err) {
		console.log(err);
		res.status(401).json();
	});
});

module.exports = router;