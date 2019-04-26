const express = require("express");
const router = express.Router();

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});
//we change app to router to make our file exported bcse we require it when we do:
//const main = require("./routes/home/main");
router.get("/", (req, res) => {
  res.render("home/index");
});
router.get("/about", (req, res) => {
  res.render("home/about");
});
router.get("/login", (req, res) => {
  res.render("home/login");
});
router.get("/register", (req, res) => {
  res.render("home/register");
});
//here we export router bcse we use it in app.js with middleware:app.use('/',main.js) that why we export it
//everytime app.use('/', main) which is app.js executed,all code of main.js will be available bcs we expoort router
module.exports = router;
