var express = require("express");
const bodyParser = require('body-parser');
const path = require('path')

var homeRoute = require("./routes/home");
var servicesRoute = require("./routes/services");
var contactRoute = require("./routes/contact");
var workingHoursRoute = require("./routes/workingHours");

var app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public', 'stylesheet')));

let date = new Date();
let day = date.getDay();
let hours = date.getHours();
 if( day < 6 && hours > 9 && hours < 17){
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
