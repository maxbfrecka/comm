var express = require('express');
var bodyParser = require('body-parser');
var communeController = require('./controllers/communeController');
var homeController = require('./controllers/homeController');

var app = express();

//template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));


//fire controllers
homeController(app);
communeController(app);









app.listen(8888);
console.log('We are listening at port 8888');









//old stuff:

/*
app.get('/contact', function(req, res){
	res.render('contact-sucess', {qs:req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('contact-success', {data: req.body});
});


app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fishing', 'fighting']}
	res.render('profile', {person: req.params.name, data: data});
});
*/