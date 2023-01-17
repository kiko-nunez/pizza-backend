// Dependencies //
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
require('dotenv').config();

const { PORT = 4000, MONGODB_URL } = process.env;

const app = express();

    // Database Connection //
//Establish Connection //
mongoose.connect(MONGODB_URL);

// Connection Events //
mongoose.connection
.on('open', () => console.log("You are connected to mongoose"))
.on('close', () => console.log("You are disconnected to mongoose"))
.on('error', () => console.log(error));

mongoose.set('strictQuery', true);

// Models
const Customer = require('./models/customer');
const Menu = require('./models/menu');

// Controllers //
const userController = require('./controllers/user');
app.use('/', userController);
const shopController = require('./controllers/shop');
app.use('/shop', shopController)

// Listening 
app.listen(PORT, () => console.log('express is listening on:', PORT));