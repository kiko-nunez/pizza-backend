// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Customer Schema
const customerSchema = Schema({
  
    name: String,
    address: String,
    phone: String,

    },  {
    timestamps: true
  });

// Building Customer Model In MongoDB
const Customer = mongoose.model('Customer', customerSchema);

// Export Customer Model
module.exports = Customer;