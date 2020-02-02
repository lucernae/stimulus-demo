const express = require('express');
const router = express.Router();

const earthquakePages = require('./pages/earthquake')
const earthquakeComponents = require('./components/earthquake')

router.use('/pages/earthquake', earthquakePages)
router.use('/components/earthquake', earthquakeComponents)


module.exports = router
