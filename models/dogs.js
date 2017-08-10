const mongoose = require('mongoose');
const dogSchema = mongoose.Schema({
    name:String,
    breed:String,
    gender:String,
    age:Number,
    shots:Boolean,
    allergies:String,
    favoriteactivities:String,
    picture:String
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
