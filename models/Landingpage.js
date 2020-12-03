const mongoose = require('mongoose');

const landingpageSchema = new mongoose.Schema({
    upload: {
        type: String,
    },
    name: {
        type: String,
        // required: 'Please Enter first name'
    },
    ward: String,
    date:{
        type: String,
        // unique: true,
        // required: 'Please Enter User name' 
    },
    price: String,
    booking: String,
    directions: String,   
    producetype: String,
    availability: String,
    
     
  });

  module.exports = mongoose.model('Landingpage', landingpageSchema);