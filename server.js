const express = require('express');
const sequelize = require('sequelize');
const path = require('path');
const session = require('express-session');
const validator = require('express-validator');

const db = require('./models');
const passport = require('./config/passport');
require('dotenv');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
if(process.env.NODE_ENV==='production') app.use(express.static('client/build'));
require('./routes');

app.use(session({secret:'doog', saveUninitialized:false, resave:false}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'./client/build/index.html'));
});

db.sequelize.sync({force:true}).then(() => {
	app.listen(PORT, () => {
		console.log(`Live on localhost:${PORT}`);
	});
});