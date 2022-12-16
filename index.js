require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const volleyball = require('volleyball');
const validator = require('./middleware/validator');
const userRouter = require('./routers/userRouter');
const songRouter = require('./routers/songRouter');
const playlistRouter = require('./routers/playlistRouter');

mongoose.connect('mongodb://localhost:27017/spotify', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', console.log.bind(console, 'connection success:'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(volleyball);

app.use('/api/v1/users', validator.validateUser, userRouter);
app.use('/api/v1/songs', validator.validateSong, songRouter);
app.use('/api/v1/playlists', validator.validatePlaylist, playlistRouter);


app.listen(port, () => {
    console.log(`App listening on port ${port}!\nMODE : ${process.env.NODE_ENV}`)
});