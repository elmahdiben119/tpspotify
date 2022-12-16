const Song = require('../models/songModel');

// Create a new song
exports.create = function (req, res) {
    try {
        const song = new Song(req.body);
        song.save(function (err) {
            if (err) throw err;
            else res.json(song);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all songs
exports.list = function (req, res) {
    try {
        Song.find({}, function (err, songs) {
            if (err) throw err;
            else res.json(songs);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get a song by id
exports.read = function (req, res) {
    try {
        Song.findById(req.params.id, function (err, song) {
            if (err) throw err;
            else res.json(song);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update a song by id
exports.update = function (req, res) {
    try {
        Song.findOneAndUpdate({
                _id: req.params.id
            }, req
            .body, {
                new: true
            },
            function (err, song) {
                if (err) throw err;
                else res.json(song);
            });
    } catch (error) {
        res.status(500).send(err);
    }
};

// Delete a song by id
exports.delete = function (req, res) {
    try {
        Song.findOneAndDelete({
            _id: req.params.id
        }, function (err, song) {
            if (err) throw err;
            else res.json(song);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};