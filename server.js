const express = require('express');
const sequelize = require('sequelize');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
if(process.env.NODE_ENV==='production') app.use(express.static('client/build'));
require('./routes');

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'./client/build/index.html'));
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbnamehere");

app.listen(PORT, () => {
	console.log(`Live on localhost:${PORT}`);
});