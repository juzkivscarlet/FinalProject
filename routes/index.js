const path = require('path');
const passport = require('../config/passport');
const express = require('express');
const router = express();
// const apiRoutes = require('./apiRoutes');

const db = require('../models');

// router.use('/api', apiRoutes);

// router.use((req,res) => {
// 	res.sendFile(path.join(__dirname,'../client/build/index.html'));
// });

// fix favicon.ico search routing issue
router.get('/favicon.ico', (req,res) => {
	res.status(204);
});

router.get('/api', (req,res) => {
	db.SalesUsers.findAll({}).then(data => {
		res.json({data:data});
	}).catch(err => {
		res.status(401).json(err);
	});
});

router.post('/sales/signup', (req, res) => {
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

router.post('/sales/login', passport.authenticate('local'), (req,res) => {
	res.json(req.user);
});

router.post('/business/signup', (req,res) => {
	db.BusinessUsers.create({
		businessName: req.body.businessName,
		industry: req.body.industry,
		username: req.body.username,
		password: req.body.password
	}).then(data => {
		res.json({data:data});
	}).catch(err => {
		console.log(err);
		res.status(401).json();
	});
});

router.post('/business/login', passport.authenticate('local'), (req,res) => {
	res.json(req.user);
});

module.exports = router;