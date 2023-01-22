// Dependencies
const express = require('express');
const cartRouter = express.Router();
const Cart = require('../models/cart')

// Routes //

// Seed
const seed = require('../models/cartseed');
cartRouter.get('/seed', (req, res) => {
    Cart.deleteMany({}, (error, allcarts) => {});

    Cart.create(seed, (error, data) => {
        res.redirect('/');
    });
});


// Cart INDEX ROUTE
cartRouter.get("/", async (req, res) => {
    try {
        // send all carts
        res.json(await Cart.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Cart CREATE ROUTE
cartRouter.post("/", async (req, res) => {
    try {
        // send all people
        res.json(await Cart.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Cart DELETE ROUTE
cartRouter.delete("/:id", async (req, res) => {
    try {
        // send all people
        res.json(await Cart.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Cart UPDATE ROUTE
cartRouter.put("/:id", async (req, res) => {
    try {
        //send all people
        res.json(
            await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});


// Export Cart Router
module.exports = cartRouter;