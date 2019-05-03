const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/cms", { useNewUrlParser: true })
//   .then(db => {
//     console.log("MONGO CONNECTED");
//   })
//   .catch(err => {
//     console.log("MONGO CAN NOT CONNECTED");
//   });

// router.all("/*":Ok listen I want to have everything that's in after admin and I want somethiing to happen to it.bcse by default we set defaultLayout: "home" in app.js
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});
router.get("/", (req, res) => {
  res.render("admin/posts");
});
router.get("/create", (req, res) => {
  res.render("/admin/posts/create");
});
module.exports = router;
