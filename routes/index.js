const path = require('path');
const express = require('express');
const app = express();
require('../config/middleware/isAuthenticated');

const apiRoutes = require('./apiRoutes');

app.use('/api', apiRoutes);
app.use('/api/signup', apiRoutes);

app.use((req,res) => {
	res.sendFile(path.join(__dirname,'../client/build/index.html'));
});

module.exports = app;