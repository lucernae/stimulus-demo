const express = require('express');
const router = express.Router();

const earthquake = require('./earthquake')

/* GET home page. */
router.use('/earthquake', earthquake)


module.exports = router
