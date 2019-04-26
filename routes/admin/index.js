const express = require("express");
const router = express.Router();

// router.all("/*":Ok listen I want to have everything that's in after admin and I want somethiing to happen to it.bcse by default we set defaultLayout: "home" in app.js
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});
//we change app to router to make our file exported bcse we require it when we do:
//const main = require("./routes/home/main");
router.get("/", (req, res) => {
  res.render("admin/index");
});
//create route for dashbord and create its view in admin called dashboard.handlebars
router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard");
});
router.get("/charts", (req, res) => {
  res.render("admin/charts");
});
module.exports = router;
