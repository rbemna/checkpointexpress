var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/services", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "views", "services.html"));
});

module.exports = router;
