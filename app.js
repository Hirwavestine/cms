const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");

//-dirname,"public":I am whatever for there I am or whatever file I am is going
//to include that way if or basically joined together with the public
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");
//load all those routes
const main = require("./routes/home/main");
//plug things in our application, here we use middleware
app.use("/", main);

app.listen(4500, () => {
  console.log(`listen on port 4500`);
});
