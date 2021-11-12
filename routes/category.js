const { Router } = require("express");
const router = Router();
const Category = require("../models/Category");

router.get("/read", async (req, res) => {
  const categories = await Category.find();
  res.render("admin/categories", {
    title: "Kategoriyalarni korish",
    layout: "main",
    header: "Kategoriyalarni korish",
    categories,
  });
});
router.get("/add", (req, res) => {
  res.render("admin/categoryCreate", {
    title: "Kategoriyalarni yaratish",
    layout: "main",
    header: "Kategoriyalarni yaratish",
  });
});

router.post("/add", async (req, res) => {
  const { categoryTitle } = req.body;
  console.log(categoryTitle);
  const category = new Category({ categoryTitle });
  await category.save();
  res.redirect("/admin/category/read");
});

router.get("/edit/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.render("admin/categoryEdit", {
    header: "Kategoriyalarni yangilash",
    layout: "main",
    category,
  });
});

router.post("/edit/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  await Category.findByIdAndUpdate(req.body, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/category/read");
    }
  });
});

module.exports = router;
