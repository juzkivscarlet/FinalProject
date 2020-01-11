const express = require('express');
const sequelize = require('sequelize');
const path = require('path');
const session = require('express-session');
const validator = require('express-validator');

const db = require('./models');
const passport = require('./config/passport');
const routes = require('./routes');
require('dotenv');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
if(process.env.NODE_ENV==='production') app.use(express.static('client/build'));
app.use(routes);

app.use(session({secret:'dog', saveUninitialized:false, resave:false}));

app.use(passport.initialize());
app.use(passport.session())

db.sequelize.sync({force:true}).then(() => {
	app.listen(PORT, () => {
		console.log(`Live on localhost:${PORT}`);
	});
});