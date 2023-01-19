// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Customer Schema
const userSchema = Schema({

    name: String,
    address: String,
    phone: String,

    },  {
    timestamps: true
  });

// Building Customer Model In MongoDB
const User = mongoose.model('User', userSchema);

// Export Customer Model
module.exports = User;