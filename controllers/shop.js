// Dependencies
const express = require('express');
const shopRouter = express.Router();
const Shop = require('../models/shopOwner')

// Routes //

// Seed
const seed = require('../models/shopseed');
shopRouter.get('/seed', (req, res) => {
    Shop.deleteMany({}, (error, allShops) => {});

    Shop.create(seed, (error, data) => {
        res.redirect('/');
    });
});


// Shop INDEX ROUTE
shopRouter.get("/", async (req, res) => {
    try {
        // send all shops
        res.json(await Shop.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Shop CREATE ROUTE
shopRouter.post("/shop", async (req, res) => {
    try {
        // send all people
        res.json(await Shop.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Shop DELETE ROUTE
shopRouter.delete("/shop/:id", async (req, res) => {
    try {
        // send all people
        res.json(await Shop.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Shop UPDATE ROUTE
shopRouter.put("/shop/:id", async (req, res) => {
    try {
        //send all people
        res.json(
            await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});


// Export Shop Router
module.exports = shopRouter;