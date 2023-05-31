const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser());
app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

require("./database/init.mongodb")

app.use("/", require("./routes"));

// handle error
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    return res.status(statusCode).json({
      status: "error",
      code: statusCode,
      message: err.message || "Internal Server Error",
    });
  });

module.exports = app;
  

