var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth')

/* GET users listing. */
router.get('/', auth, function (req, res, next) {
  res.render('admin/index', {
    layout: 'main',
    title: 'Admin page'
  })
});

module.exports = router;
