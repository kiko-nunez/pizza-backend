// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Shop Schema
const shopSchema = Schema({
    shop_name: String,
    img: String,
    phone: String,
    address: String,
    // not sure if this needs to be more detailed for api
    // as far as street, city, state, zip or just one string will work
  },  {
    timestamps: true
  });

// Building Shop Model In MongoDB
const Shop = mongoose.model('Shop', shopSchema);

// Export Shop Model
module.exports = Shop;