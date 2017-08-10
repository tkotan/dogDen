//using Mongoose to create relationship
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    title:String,
    body:String,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
