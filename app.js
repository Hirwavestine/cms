const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");

//-dirname,"public":I am whatever for there I am or whatever file I am is going
//to include that way if or basically joined together with the public
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home/index");
});
app.get("/about", (req, res) => {
  res.render("home/about");
});
app.listen(4500, () => {
  console.log(`listen on port 4500`);
});
