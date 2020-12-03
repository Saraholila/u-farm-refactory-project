const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
const loginSchema = new mongoose.Schema({
    
    
    username:{
        type: String,
        // unique: true,
        // required: 'Please Enter User name' 
    },
    
    password: {
        type: String,
        // required: 'Please Enter password'
    },

    role: String,
  });

//   loginSchema.plugin(passportLocalMongoose);
  module.exports = mongoose.model('LoginSchema', loginSchema);