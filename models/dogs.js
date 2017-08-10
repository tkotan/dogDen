const mongoose = require('mongoose');
const Message = require('../models/messages.js');


const dogSchema = mongoose.Schema({
    name:String,
    breed:String,
    gender:String,
    age:Number,
    shots:Boolean,
    allergies:String,
    favoriteactivities:String,
    picture:String,
    messages:[Message.schema]
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
