const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const webRoutes = require("./routes/web");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", webRoutes);

module.exports = app;
