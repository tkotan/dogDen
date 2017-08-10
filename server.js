//require the packages you will use
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//body parser to scan the forms
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

//method override for put, post and delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//connecting dogs controller file
const dogsController = require('./controllers/dogs.js');
app.use('/dogs', dogsController);

//connecting messages controller file
const messagesController = require('./controllers/messages.js');
app.use('/messages', messagesController);

//linking css
app.use(express.static('public'));





//setting up home page
app.get('/', (req, res)=>{
  res.render('index.ejs');
});







const mongoUri = process.env.MONGODB_URI || ('mongodb://localhost:27017/dogden');
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});

port = process.env.PORT || 3000;

app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
