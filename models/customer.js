// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const customerSchema = Schema({
    email: String,
    address: String,
    },  {
    timestamps: true
  });

// User Model
const Customer = mongoose.model('Customer', customerSchema);

// Export User Model
module.exports = Customer;