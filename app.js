const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
//-dirname,"public":I am whatever for there I am or whatever file I am is going to include that way if or basically joined together with the public
app.use(express.static(path.join(__dirname, "public")));
//set view engine
app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");
//load all those routes
const home = require("./routes/home/index");
const admin = require("./routes/admin/index");
const posts = require("./routes/admin/posts");
//plug things in our application, here we use middleware, Use routes
//("/admin", admin) this means that any code reach slash which is the route admin is going to execute admin
app.use("/", home);
app.use("/admin", admin);
app.use("/admin/posts", posts);
app.listen(4500, () => {
  console.log(`listen on port 4500`);
});
