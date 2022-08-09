var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// db connection
const db = require('./configs/db.config');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var charactersRouter = require('./routes/characters');
var challengesRouter = require('./routes/challenges');
var animalsRouter = require('./routes/animals');
var unlockedRouter = require('./routes/unlockedAnimals');
var challengeParticipants = require('./routes/challengeParticipants');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter(db));
app.use('/characters', charactersRouter(db));
app.use('/challenges', challengesRouter(db));
app.use('/animals', animalsRouter(db));
app.use('/unlocked', unlockedRouter(db));
app.use('/participants', challengeParticipants(db));

module.exports = app;
