const express = require('express');
const router = express.Router();

const getr = require('../controllers/getr.controller.js');

/**
 * This route is for testing the  default route
 */
router.get('/getr', getr.getFilterItems);

module.exports = router;
