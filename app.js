require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var ruanganRouter = require('./routes/ruangan');
var pertanyaanRouter = require('./routes/pertanyaan');
var jawabanRouter = require('./routes/jawaban');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ruangan', ruanganRouter);
app.use('/pertanyaan', pertanyaanRouter);
app.use('/jawaban', jawabanRouter);

module.exports = app;
