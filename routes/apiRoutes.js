const router = require('express').Router();
const Burger = require('../models/Burger');

router.post("/change/:id", async function (req, res) {
    try {
        await Burger.update(req.params.id, req.body.devoured)
        res.redirect("/")
    } catch (error) {
        res.redirect("/")
    }
})

module.exports = router;