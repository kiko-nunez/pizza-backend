// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Menu Schema
const menuSchema = Schema({
  
  item: String,
  description: String,
  img: String,
  price: String,

  shop: {
		type: Schema.Types.ObjectId,
		ref: 'Shop',
	},
  },  {
    timestamps: true
  });

// Building Menu Model In MongoDB
const Menu = mongoose.model('Menu', menuSchema);

// Export User Model
module.exports = Menu;