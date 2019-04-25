const express = require("express");
const router = express.Router();
//we change app to router to make our file exported bcse we require it when we do:
//const main = require("./routes/home/main");
router.get("/", (req, res) => {
  res.render("admin/index");
});
module.exports = router;
