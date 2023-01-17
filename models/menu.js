// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const menuSchema = Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  },  {
    timestamps: true
  });

// User Model
const Menu = mongoose.model('Menu', menuSchema);

// Export User Model
module.exports = Menu;