const Playlist = require('../models/playlistModel');

// Create a new playlist
exports.create = function (req, res) {
    try {
        const playlist = new Playlist(req.body);
        playlist.save(function (err) {
            if (err) throw err;
            else res.json(playlist);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all playlists
exports.list = function (req, res) {
    try {
        Playlist.find({}, function (err, playlists) {
            if (err) throw err;
            else res.json(playlists);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get a playlist by id
exports.read = function (req, res) {
    try {
        Playlist.findById(req.params.id, function (err, playlist) {
            if (err) throw err;
            else res.json(playlist);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update a playlist by id
exports.update = function (req, res) {
    try {
        Playlist.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        }, function (err, playlist) {
            if (err) throw err;
            else res.json(playlist);
        });
    } catch (error) {
        res.status(500).send(err);
    }
};

// Delete a playlist by id
exports.delete = function (req, res) {
    try {
        Playlist.remove({
            _id: req.params.id
        }, function (err, playlist) {
            if (err) throw err;
            else res.json({
                message: 'Playlist successfully deleted'
            });
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Add a song to a playlist
exports.addSong = function (req, res) {
    try {
        Playlist.findById(req.params.id, function (err, playlist) {
            if (err) throw err;
            else {
                playlist.songs.push(req.body.songId);
                playlist.save(function (err) {
                    if (err) throw err;
                    else res.json(playlist);
                });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Remove a song from a playlist
exports.removeSong = function (req, res) {
    try {
        Playlist.findById(req.params.id, function (err, playlist) {
            if (err) throw err;
            else {
                playlist.songs.pull(req.body.songId);
                playlist.save(function (err) {
                    if (err) throw err;
                    else res.json(playlist);
                });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all songs in a playlist
exports.getSongs = function (req, res) {
    try {
        Playlist.findById(req.params.id, function (err, playlist) {
            if (err) throw err;
            else res.json(playlist.songs);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};