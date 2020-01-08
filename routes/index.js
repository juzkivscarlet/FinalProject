const path = require('path');
const router = require('express').Router();

// API Routes
// const apiRoutes = require('./api');
// router.use('/api', apiRoutes);

// send React app if API routes aren't hit
router.use((req,res) => {
    res.sendFile(path.join(__dirname,'../client/index.html'));
});

module.exports = router;