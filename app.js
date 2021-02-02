const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const rProduct = require("./routers/product");
const rIndex = require("./routers/index");
const rAdd = require("./routers/add");

mongoose.connect("mongodb://localhost:27017/uzimpex", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("open", () => {
  console.log("MongoDB running");
});
db.on("error", () => {
  console.log("MongoDB eror running", err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(rProduct);
app.use(rIndex);
app.use(rAdd);


app.use(express.static(path.join(__dirname, "public")));

app.listen(4000, () => {
  console.log("4000-port ishlamoqda");
});
