// Dependencies
const express = require('express');
const shopRouter = express.Router();
const Customer = require('../models/customer.js');
const Menu = require('../models/menu');

// Routes //

// create a test route //
shopRouter.get("/", (req, res) => {
    res.send("hello world");
});

// Shop INDEX ROUTE
shopRouter.get("/", async (req, res) => {
    try {
        // send all shops
        res.json(await Menu.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Shop CREATE ROUTE
shopRouter.post("/shop", async (req, res) => {
    try {
        // send all people
        res.json(await Menu.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Shop DELETE ROUTE
shopRouter.delete("/shop/:id", async (req, res) => {
    try {
        // send all people
        res.json(await Menu.findByIdAndRemove(req.params.id));
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
            await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});


// Export User Router
module.exports = shopRouter;