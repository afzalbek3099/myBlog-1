const express = require("express");
const router = express.Router();
const Maqola = require("../models/Maqola");

/* GET home page. */
router.get("/", async function (req, res, next) {

  const maqola = await Maqola.find()
  res.render("index", { layout: "layout", maqola });
});





  res.render("index", { layout: "layout" });
});


module.exports = router;
