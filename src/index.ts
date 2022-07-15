import path from "path";

import express from "express";
import { create } from "express-handlebars";

const app = express();

const hbs = create({ extname: ".html" });

const web = path.join(__dirname, "web");

app.use(express.static(web));

app.engine("html", hbs.engine);
app.set("view engine", "html");
app.set("views", web);

app.get("/", (req, res, next) => {
  res.render("home/index", {
    name: "Joe",
  });
});

app.get("/about", (req, res, next) => {
  res.render("about/index", {
    name: "Joe",
  });
});

app.listen(3000, () => {
  console.log("server running");
});
