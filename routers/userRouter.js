const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Create a new user
router.post('/', UserController.create);

// Get all users
router.get('/', UserController.list);

// Get a user by id
router.get('/:id', UserController.read);

// Update a user by id
router.put('/:id', UserController.update);

// Delete a user by id
router.delete('/:id', UserController.delete);

module.exports = router;