// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const menuSchema = Schema({
  item: String,
  description: String,
  price: String,
  // shop: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Shop',
	//   },
  },  {
    timestamps: true
  });

// User Model
const Menu = mongoose.model('Menu', menuSchema);

// Export User Model
module.exports = Menu;