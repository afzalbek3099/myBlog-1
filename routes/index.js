const express = require("express");
const router = express.Router();
const Text = require("../models/Text");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { layout: "layout" });
});

module.exports = router;
