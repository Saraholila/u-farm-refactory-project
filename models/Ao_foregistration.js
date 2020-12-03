const mongoose = require('mongoose');

const ao_foregistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: 'Please Enter first name'
    },
    ward: String,
    regdate:{
        type: String,
        // unique: true,
        // required: 'Please Enter User name' 
    },
    gender: String,
    birthdate: {
        type: String,
    },
    activities: String,
    nin: String,
    phone: {
        type: String,
        // required: 'Please Enter phone'
    },
    directions: String,
    residenttype: String,
    stayperiod: String,     
     
  });

  module.exports = mongoose.model('Ao_foregistration', ao_foregistrationSchema);