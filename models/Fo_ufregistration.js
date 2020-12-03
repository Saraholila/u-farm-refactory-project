const mongoose = require('mongoose');

const fo_ufregistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: 'Please Enter first name'
    },
    gender: String,
    
    regdate:{
        type: String,
        // unique: true,
        // required: 'Please Enter User name' 
    },
    
    birthdate: {
        type: String
    },
    activities: String,
    phone: String,
    nin: String,
    ward: String,
    password: {
        type: String,
        // required: 'Please Enter password'
    },
  });

  module.exports = mongoose.model('Fo_ufregistration', fo_ufregistrationSchema);