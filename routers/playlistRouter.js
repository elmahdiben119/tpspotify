const express = require('express');
const router = express.Router();
const PlaylistController = require('../controllers/playlistController');

// Create a new song
router.post('/', PlaylistController.create);

// Get all songs
router.get('/', PlaylistController.list);

// Get a song by id
router.get('/:id', PlaylistController.read);

// Update a song by id
router.put('/:id', PlaylistController.update);

// Delete a song by id
router.delete('/:id', PlaylistController.delete);

// Add a song to a playlist
router.post('/:id/songs', PlaylistController.addSong);

// Remove a song from a playlist
router.delete('/:id/songs/:songId', PlaylistController.removeSong);

// Get all songs in a playlist
router.get('/:id/songs', PlaylistController.getSongs);

module.exports = router;