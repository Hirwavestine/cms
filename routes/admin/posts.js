const express = require("express");
const router = express.Router();
const post = require("../../models/Post");
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
  res.send("IT wORKS");
});
router.get("/create", (req, res) => {
  res.render("admin/posts/create");
});
router.post("/create", (req, res) => {
  let allowComments = true;
  if (req.body.allowComments) {
    allowComments = true;
  } else {
    allowComments = false;
  }
  post({
    title: req.body.title,
    status: req.body.status,
    allowComments: req.baseUrl.allowComments,
    body: req.body.body
  });
  //console.log(req.body.allowComments);
});
module.exports = router;
