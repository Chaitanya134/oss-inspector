const express = require('express');
const { authenticate }  = require('../controllers/authController');

const router = express.Router();

// Authenticate Github Signin
router.route("/signin").post(authenticate);

module.exports = router;