// Dependencies
const express = require('express');
const menuRouter = express.Router();
const Menu = require('../models/menu')

// Routes //

// Seed
const seed = require('../models/menuseed');
menuRouter.get('/seed', (req, res) => {
    Menu.deleteMany({}, (error, allmenus) => {});

    Menu.create(seed, (error, data) => {
        res.redirect('/');
    });
});


// menu INDEX ROUTE
menuRouter.get("/", async (req, res) => {
    try {
        // send all menus
        res.json(await Menu.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// menu CREATE ROUTE
menuRouter.post("/", async (req, res) => {
    try {
        // send all people
        const menu = await Menu.create(req.body);

        res.json(menu);
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// menu DELETE ROUTE
menuRouter.delete("/:id", async (req, res) => {
    try {
        // send all people
        res.json(await Menu.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// menu UPDATE ROUTE
menuRouter.put("/:id", async (req, res) => {
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


// Export Menu Router
module.exports = menuRouter;