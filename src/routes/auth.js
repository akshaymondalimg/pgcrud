// Global Imports
const router = require('express').Router();

// Local Imports
const { AuthController } = require('../controllers');

router.post('/register-user', AuthController.registerUser);
router.post('/login-user', AuthController.loginUser);

module.exports = router;