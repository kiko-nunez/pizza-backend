// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const menuSchema = Schema({
  email: String,
  address: String,
  },  {
    timestamps: true
  });

// User Model
const Menu = mongoose.model('Menu', menuSchema);

// Export User Model
module.exports = Menu;