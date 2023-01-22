// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Cart Schema
const cartSchema = Schema({
  
  item: String,
  image: String,
  description: String,
  price: String,

  },  {
    timestamps: true
  });

// Cart Model
const Cart = mongoose.model('Cart', cartSchema);

// Export Menu Model
module.exports = Cart;