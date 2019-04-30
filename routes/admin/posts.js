const express = require("express");
const router = express.Router();

// router.all("/*":Ok listen I want to have everything that's in after admin and I want somethiing to happen to it.bcse by default we set defaultLayout: "home" in app.js
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});
router.get("/", (req, res) => {
  res.send("It works");
});
module.exports = router;
