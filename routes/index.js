const express = require('express');
const router = express.Router();

const getir = require('../controllers/getr.controller.js');

/**
 * This route is for testing the  default route
 */
router.get('/api/records', getir.getFilterItems);

// request to handle undefined or all other routes
router.get("*", function(req, res) {
  res.send("Welcome to Getir REST API");
})

module.exports = router;
