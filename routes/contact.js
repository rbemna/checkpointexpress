var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/contact", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "public", "contact.html"));
});

module.exports = router;
