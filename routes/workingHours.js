var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/workingHours", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "public", "workingHours.html"));
});

module.exports = router;
