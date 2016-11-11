var mongoose = require('mongoose');
var bodyParser = require('body-parser');



//connect database
mongoose.connect('mongodb://test:test@ds031157.mlab.com:31157/posts');

//schema
var postSchema = new mongoose.Schema({
	post: String,
	randID: String,
	time: String,
	rID1: String, rID2: String, rID3: String, rID4: String,
	rID5: String, rID6: String, rID7: String, rID8: String,
	rID1tc: String, rID2tc: String, rID3tc: String, rID4tc: String,
	rID5tc: String, rID6tc: String, rID7tc: String, rID8tc: String
});


//Create model / collection
var Post = mongoose.model('Post', postSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });



module.exports = function(app){


app.get('/commune', function(req, res){
	Post.find({}, function(err, data){
		if (err) throw err;
		res.render('commune', {posts: data});
	})
});


//posts data
app.post('/commune', urlencodedParser, function(req, res){
	//get data from the view and add it to mongodob
	//create a variable - a new Todo item, the item is grabbed from req.body
	//adds an item to the Todo collection at mongoose with the mongoose schema
	var newPost = Post(req.body).save(function(err,data){
		//if error, throw the error
		if (err) throw err;
		//pass data back to the view
		res.json(data);
	});
});

app.delete('/commune/:post', function(req, res){
	//looks for an item in the collection, and removes it
	//deletes it then passes updated data
	//replace hyphens with space then look in Todo because word has hyphens instead of spaces
	Post.find({post: req.params.post.replace(/\-/g, " ")}).remove(function (err, data){
		if (err) throw err;
		res.json(data);
	});
});


};