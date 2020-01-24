const path = require('path');
const passport = require('../config/passport');
const express = require('express');
const axios = require('axios');
const router = express();
const bcrypt = require('bcryptjs');
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
	  console.log(req.user);
	  res.json(req.user);
	//   db.SalesUsers.findOne({
	// 	where: {
	// 	  username: req.user.username
	// 	}
	//   }).then(function (data) {
	// 	res.json({
	// 		username: data.data.username,
	// 		lastName: data.data.lastName
	// 	});
	//   });
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
	  res.json(req.user);
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
	req.login(req.user, err => {
		if(err) return console.log(err);
		res.json(req.user);
	});
});

router.put('/sales/update', (req,res) => {

	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null);

	// console.log(req.body);
	db.SalesUsers.update(
		{firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		},
		{where: {id: req.user.id}}
	).then(data => {
		res.json({data:data});
	}).catch(err => {
		console.log(err);
		res.status(401).json();
	});
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
	req.login(req.user, err => {
		if(err) return console.log(err);
		res.json(req.user);
	});
});

router.put('/business/update', (req,res) => {

	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null);

    db.BusinessUsers.update({
        businessName: req.body.businessName,
        industry: req.body.industry,
        username: req.body.username,
        password: req.body.password
    }, {where: {
        id: req.user.id
    }}).then(data => {
        res.json({data: data});
    }).catch(err => {
        console.log(err);
        res.status(401).json(err);
    });
});

// logging out
router.get('/logout', (req,res) => {
	req.logout();
	res.redirect("/");
});

router.get('/api/user', (req,res) => {
	res.json(req.user);
});

router.get('/api/offerings', (req,res) => {
	db.Offerings.findAll({}).then(data => {
		res.json(data);
	}).catch(err => {
		res.status(401).json(err);
	});
});

router.post('/api/offerings', (req,res) => {
	db.Offerings.create({
		product: req.body.product,
		description: req.body.description,
		priceRange: req.body.priceRange,
		commissions: req.body.commissions,
		business: req.body.business
	}).then(data => {
		res.json({data: data});
	}).catch(err => {
		console.log(err);
		res.status(401).json(err);
	});
});

router.get('/api/sales', (req,res) => {
	db.Sales.findAll({
		where: {
			businessName: req.user.businessName
		}
	}).then(data => {
		res.json({data: data});
	}).catch(err => {
		res.status(401).json(err);
	});
});

router.post('/api/sales', (req,res) => {
	db.Sales.create({
		salesRep: req.body.salesRep,
		commission: req.body.commission,
		approved: req.body.approved
	}).then(data => {
		res.json({data: data});
	}).catch(err => {
		console.log(err);
		res.status(401).json(err);
	});
});

router.get('/api/leads', (req,res) => {
	db.Leads.findAll({}).then(data => {
		res.json({data: data});
	}).catch(err => {
		res.status(401).json(err);
	});
});

router.post('/api/leads', (req,res) => {
	db.Leads.create({
		name: req.body.name,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		business: req.body.business
	}).then(data => {
		res.json({data: data});
	}).catch(err => {
		console.log(err);
		res.status(401).json(err);
	});
});

router.get('/api/modules', (req,res) => {
	db.Modules.findAll({}).then(data => {
		res.json({data: data});
	}).catch(err => {
		res.status(401).json(err);
	});
});

module.exports = router;