const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compiler = require("compilex");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser());
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://sonidabezt:kobukovu1710@cluster0.q5wth5y.mongodb.net/auth")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}) 
        .then((user) => {
            if(user) {
                if(password === user.password) {
                    res.send({message: "Login Success", user: user})
                } else {
                    res.send({message: "Password didn't match"})
                }
            } else {
                res.send({message: "User not registered"})
            }
        })
        .catch((err) => {
            console.log(err);
        });
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({ email: email}) 
        .then((user) => {
            if(user) {
               res.send({ message: "User already registered"})
            } else {
                const user = new User({
                    name,
                    email,
                    password
                })
                user.save().then(() => {
                  
                }).catch(error => {
                    console.log(error);
                }) 
            }
        })
        .catch((err) => {
            console.log(err);
        });
    
}) 

var option = { stats: true };
compiler.init(option);  

app.post("/", (req, res) => {
    var code = req.body.code;
    var input = req.body.input;

    if (!input) {
        var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
        compiler.compileCPP(envData, code, function (data) {
            // app.get('/compile', (req, res) => {
            //     var result = data;
            //     res.json(result);
            //   });
            if (data.output) {
                res.send(data);
            }
            else {
                res.send({ output: "error" })
            }
        });
    }
    else {
        var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
        compiler.compileCPPWithInput(envData, code, input, function (data) {
            // if (data.output) {
            //     res.send(data);
            // }
            // else {
            //     res.send({ output: "error" })
            // }
            res.json(data);
        });
    } 
});

app.get("/fullstat", function(req, res) {
    compiler.fullStat(function(data) {
        res.send(data);
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

compiler.flush(function () {
    console.log("Done");
})


// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongodb+srv://sonidabezt:kobukovu1710@cluster0.q5wth5y.mongodb.net/auth")

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)

// //Routes
// app.post("/login", (req, res)=> {
//     const { email, password} = req.body
//     User.findOne({ email: email}) 
//         .then((user) => {
//             if(user) {
//                 if(password === user.password) {
//                     res.send({message: "Login Success", user: user})
//                 } else {
//                     res.send({message: "Password didn't match"})
//                 }
//             } else {
//                 res.send({message: "User not registered"})
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }) 

// app.post("/register", (req, res)=> {
//     const { name, email, password} = req.body
//     User.findOne({ email: email}) 
//         .then((user) => {
//             if(user) {
//                res.send({ message: "User already registered"})
//             } else {
//                 const user = new User({
//                     name,
//                     email,
//                     password
//                 })
//                 user.save().then(() => {
                  
//                 }).catch(error => {
//                     console.log(error);
//                 }) 
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         });
    
// }) 

// app.listen(9002,() => {
//     console.log("BE started at port 9002")
// })