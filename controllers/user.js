// Dependencies
const express = require('express');
const userRouter = express.Router();
const Customer = require('../models/customer.js');

// Routes //

// Seed
const seed = require('../models/shopseed');
userRouter.get('/seed', (req, res) => {
    Customer.deleteMany({}, (error, allCustomers) => {});

    Customer.create(seed, (error, data) => {
        res.redirect('/');
    });
});

// create a test route //
userRouter.get("/", (req, res) => {
    res.send("hello world");
});

// Customer INDEX ROUTE
userRouter.get("/customer", async (req, res) => {
    try {
        // send all people
        res.json(await Customer.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Customer CREATE ROUTE
userRouter.post("/customer", async (req, res) => {
    try {
        // send all people
        res.json(await Customer.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Customer DELETE ROUTE
userRouter.delete("/customer/:id", async (req, res) => {
    try {
        // send all people
        res.json(await Customer.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Customer UPDATE ROUTE
userRouter.put("/customer/:id", async (req, res) => {
    try {
        //send all people
        res.json(
            await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});


// Export User Router
module.exports = userRouter;