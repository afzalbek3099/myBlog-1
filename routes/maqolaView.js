const express = require("express");
const router = express.Router();
const Maqola = require('../models/Maqola')

router.get("/:id", async function (req, res, next) {
    const maqola = await Maqola.findById(req.params.id)
    console.log(maqola);
    res.render("maqolaView", {
        layout: "layout",
        maqolaTitle: maqola.maqolaTitle,
        maqolaText: maqola.maqolaText,
        img: maqola.img,
        maqola

    });
});





module.exports = router