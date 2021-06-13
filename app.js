var express = require("express");
var homeRoute = require("./routes/home");
var servicesRoute = require("./routes/services");
var contactRoute = require("./routes/contact");
var workingHoursRoute = require("./routes/workingHours");

var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(homeRoute);
// app.use(servicesRoute);
// app.use(contactRoute);

let date = new Date();
let day = date.getDay();
let hours = date.getHours();
// day < 6 && hours > 9 && hours < 18
if (hours < 9) {
  app.use(homeRoute);
  app.use(servicesRoute);
  app.use(contactRoute);
} else {
  app.use(workingHoursRoute);
}

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
module.exports = app;
