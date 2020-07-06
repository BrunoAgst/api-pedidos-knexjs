const express = require('express');
const router = express.Router();
const database = require('../database/database');

router.get('/v1/client', (req, res) => {
    res.send("Hello Word");
});


module.exports = router;