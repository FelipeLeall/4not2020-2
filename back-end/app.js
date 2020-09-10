var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const db = require('./config/dataBase')
const dbUser = 'Felipeleall'
const dbPass = 'Dyth0218'
const dbName = 'naotenhopaz'
//db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.no1fm.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)
db(`mongodb+srv://FelipeLeall:Dyth0218@cluster0.no1fm.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority`)


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

const curso = require('./routes/curso');
app.use('/curso',curso)

module.exports = app;
