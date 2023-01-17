// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const customerSchema = Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  },  {
    timestamps: true
  });

// User Model
const Customer = mongoose.model('Customer', customerSchema);

// Export User Model
module.exports = Customer;