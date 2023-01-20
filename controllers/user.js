// Dependencies
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');

// Routes //

// create a test route //
userRouter.get("/", (req, res) => {
    res.send("hello world");
});

// User INDEX ROUTE
userRouter.get("/", async (req, res) => {
    try {
        // send all people
        res.json(await User.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// User CREATE ROUTE
userRouter.post("/", async (req, res) => {
    try {
        // send all people
        res.json(await User.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// User DELETE ROUTE
userRouter.delete("/:id", async (req, res) => {
    try {
        // send all people
        res.json(await User.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// User UPDATE ROUTE
userRouter.put("/:id", async (req, res) => {
    try {
        //send all people
        res.json(
            await User.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});


// Export User Router
module.exports = userRouter;