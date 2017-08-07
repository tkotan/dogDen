const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
// const session = require('express-session');


app.get('/new', (req, res)=>{
  res.send('hi');
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
