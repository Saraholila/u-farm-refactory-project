const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: 'Please Enter first name'
    },
    password: {
        type: String,
        // required: 'Please Enter password'
    },  
    role: String,
    
     
  });
  userSchema.plugin(passportLocalMongoose);
  module.exports = mongoose.model('User', userSchema);