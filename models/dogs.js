const mongoose = require('mongoose');
const dogSchema = mongoose.Schema({
    name:String,
    breed:String,
    gender:String,
    age:Number,
    favoriteactivities:String,
    shots:Boolean,
    allergies:String,
    picture:String
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
