// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Menu Schema
const menuSchema = Schema({
  
  item: String,
  image: String,
  description: String,
  price: String,

  },  {
    timestamps: true
  });

// Menu Model
const Menu = mongoose.model('Menu', menuSchema);

// Export Menu Model
module.exports = Menu;