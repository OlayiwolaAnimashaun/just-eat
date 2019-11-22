var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var session = require('express-session')
var mysql = require('mysql')
var app = express();


app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/setSomething', function(req, res, next) {
  req.session.name = 'John Smith'
  res.send('ahh');
});


app.get('/getSomething', function(req, res, next) {
  res.send('hello' + req.session.name);
});


app.post('/login',function(req,res){
	var user_name=req.body.username;
	var pass_word=req.body.pass;

	console.log("User name = "+user_name);
	console.log("Password = "+pass_word);
	
	res.send("1");
});

app.post('/register', function(err,req,res){
	
	
    console.log("inslide the server side")
    res.send("ok")


	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host :'localhost',
		user :'root',
		password :'',
		database :'justeat'
	});
	
	connection.connect();
	
	var user_name=req.body.username;
	var e_mail=req.body.email;
	var pass_word=req.body.pass;
	var account_type=req.body.acc_type;
	var phone_number=req.body.phoneNo;
	
	console.log("User Name= "+user_name);
	console.log("E-Mail = "+e_mail);
	console.log("Pass word = "+pass_word);
	console.log("Account type ="+account_type);
	console.log("Phone No. = "+phone_number);
	
	connection.query("INSERT INTO users (user_name, e_mail, pass_word, account_type, phone_number) VALUES ('"+user_name+"', '"+e_mail+"', '"+pass_word+"', '"+account_type+"','"+phone_number+"');");
	
	connection.end();

   res.send("recorded inserted");
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
