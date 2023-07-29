const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
const compiler = require("compilex");
const option = { stats: true } 
compiler.init(option) 

// init middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// init database
require("./database/init.mongodb");

app.use("/", require("./routes"));
app.use('/compile', (req,res) => {
  const { code, input } = req.body
  if (!input) {
    var envData = { OS: "windows" };
    compiler.compilePython(envData, code, function(data){
        res.send(data)
    })
}
else {
    var envData = { OS: "windows" };
    compiler.compilePythonWithInput(envData, code, input, function(data){
        res.send(data)
    })
}
})

// handle error
app.use((req, res, next) => {
  const error = new Error("Cannot connect to this route");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 501;
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
