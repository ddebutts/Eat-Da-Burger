const router = require('express').Router();
const Burger = require('../models/Burger')

router.get("/", async function (req, res) {
    try {
        const data = await Burger.findAll()
        // console.log(data)
        res.render("pages/home", {
            title: "All Burgers!",
            burgers: data
        })

    } catch (error) {
        console.log(error)
    }
})
router.get("/id/:id", async function (req, res) {
    try {
        const data = await Burger.findById(req.params.id)
        console.log(data)
        res.render("pages/home")

    } catch (error) {
        console.log(error)
    }
    // Burger.findById(req.params.id)
    //     .then(function (data) {
    //         console.log(data)
    //         res.render("pages/home")
    //     })
    //     .catch(function (err) {
    //         console.log(err)
    //     })
})
router.get("/name/:name", async function (req, res) {
    try {
        const data = await Burger.findByName(req.params.name)
        console.log(data)
        res.render("pages/home")

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;