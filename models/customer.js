// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Customer Schema
const customerSchema = Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    address: String,
    },  {
    timestamps: true
  });

// Building Customer Model In MongoDB
const Customer = mongoose.model('Customer', customerSchema);

// Export Customer Model
module.exports = Customer;