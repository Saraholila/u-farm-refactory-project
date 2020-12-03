const mongoose = require('mongoose');

const urbanfarmerSchema = new mongoose.Schema({
    upload: {
        type: String,
    },
    name: {
        type: String,
        required: 'Please Enter first name'
    },
    ward: String,
    date:{
        type: String,
        // unique: true,
        // required: 'Please Enter User name' 
    },
    price: String,
    paymentmode: String,
    directions: String,
    deliverymode: String,
    producetype: String,
    availability: String,
    booking: String,
     
  });

  module.exports = mongoose.model('Urbanfarmer', urbanfarmerSchema);