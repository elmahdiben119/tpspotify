const express = require('express');
const router = express.Router();
const SongController = require('../controllers/songController');

// Create a new song
router.post('/', SongController.create);

// Get all songs
router.get('/', SongController.list);

// Get a song by id
router.get('/:id', SongController.read);

// Update a song by id
router.put('/:id', SongController.update);

// Delete a song by id
router.delete('/:id', SongController.delete);

module.exports = router;