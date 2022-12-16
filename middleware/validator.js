const {
    check
} = require('express-validator');
const Song = require('../models/songModel');
const User = require('../models/userModel');
const Playlist = require('../models/playlistModel');


// validate Song
module.exports.validateSong = [
    check('title').isLength({
        min: 1
    }).withMessage('Title is required'),
    check('artist').isLength({
        min: 1
    }).withMessage('Artist is required'),
    check('url').isLength({
        min: 1
    }).withMessage('Song URL is required'),
    check('artist').isLength({
        min: 1

    }).withMessage('User ID is required'),
    check('artist').custom(async (value) => {
        const user = await User.findById(value);
        if (!user) {
            throw new Error('User ID does not exist');
        }
    }),
    check('title').custom(async (value) => {
        const song = await Song.findOne({
            title: value
        });
        if (song) {
            throw new Error('Title already exists');
        }
    }),
    check('url').custom(async (value) => {
        const song = await Song.findOne({
            url: value
        });
        if (song) {
            throw new Error('Song URL already exists');
        }
    }),
]

// validate Playlist
module.exports.validatePlaylist = [
    check('title').isLength({
        min: 1
    }).withMessage('Title is required'),
    check('user').isLength({
        min: 1
    }).withMessage('User ID is required'),
    check('user').custom(async (value) => {
        const user = await User.findById(value);
        if (!user) {
            throw new Error('User ID does not exist');
        }
    }),
    check('title').custom(async (value) => {
        const playlist = await Playlist.findOne({
            title: value
        });
        if (playlist) {
            throw new Error('Title already exists');
        }
    }),
]

// validate User
module.exports.validateUser = [
    check('First name').isLength({
        min: 1,
    }).withMessage('First name is required'),
    check('Last name').isLength({
        min: 1
    }).withMessage('Last name is required'),
    check('email').isLength({
        min: 1
    }).withMessage('Email is required'),
    check('password').isLength({
        min: 1
    }).withMessage('Password is required'),
    check('email').custom(async (value) => {
        const
            user = await User.findOne({
                email: value
            });
        if (user) {
            throw new Error('Email already exists');
        }
    }),
]