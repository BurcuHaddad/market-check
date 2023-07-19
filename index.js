const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

const app = express();

//Logs
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Body parser
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

module.exports = app;
