var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const db = require('./config/dataBase')
const dbUser = process.env.DB_USER
const dbname = process.env.DB_Name
const dbpass = process.env.DB_PASS
db(`mongodb+srv://${dbUser}:${dbpass}@cluster0.no1fm.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste');
app.use('/teste', teste);

module.exports = app;
