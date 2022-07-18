// Global Imports
const router = require('express').Router();

// Local Imports
const { UserController } = require('../controllers');

router.get('/get-user/:id?', UserController.getUser);
router.post('/update-user/:id?', UserController.updateUser);

module.exports = router;