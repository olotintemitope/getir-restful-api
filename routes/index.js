const express = require('express');
const router = express.Router();

/**
 * This route is for testing the  default route
 */
router.get('/', function(req, res, next) {
  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

module.exports = router;
