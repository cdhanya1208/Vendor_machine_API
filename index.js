const express = require('express');
var app = express();
var path = require('path');
var router = require('./routes/router');

//view engine setup
var cons = require('consolidate');


app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.listen(3000,function(){
   console.log("App listening on port 3000");
});
