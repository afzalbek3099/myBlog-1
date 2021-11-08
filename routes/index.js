const express = require("express");
const router = express.Router();
const Text = require("../models/Text");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const texts = await Text.find();
  console.log(texts);

  res.render("index", { layout: "layout", texts});
});

router.post("/", async function (req, res) {
  const { subject, text } = req.body;
  const texts = new Text({
    subject,
    text,
  });

  await texts.save();

  res.redirect("/", texts);
});

module.exports = router;
