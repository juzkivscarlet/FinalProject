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

router.get('/api/sales', (req,res) => {
	db.SalesUsers.findAll({}).then(data => {
		res.json({data:data});
	}).catch(err => {
		res.status(401).json(err);
	});
});

router.get('/api/business', (req,res) => {
	db.BusinessUsers.findAll({}).then(data => {
		res.json({data:data});
	}).catch(err => {
		res.status(401).json(err);
	});
});

// Route for getting some data about our user to be used client side
router.get('/api/sales/user_data', function (req, res) {
	// console.log(req.user);
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      db.SalesUsers.findOne({
        where: {
          id: req.user.id
        }
      }).then(function (data) {
        res.json({
			id: data.user.id,
          	username: req.user.username
        });
      });
    }
  });

// Route for getting some data about our user to be used client side
router.get('/api/business/user_data', function (req, res) {
	// console.log(req.user);
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      db.BusinessUsers.findOne({
        where: {
          id: req.user.id
        }
      }).then(function (data) {
        res.json({
			id: data.user.id,
          	username: req.user.username
        });
      });
    }
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