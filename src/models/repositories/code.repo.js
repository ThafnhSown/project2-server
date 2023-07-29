'use strict'

const compiler = require("compilex");
const option = { stats: true } 
compiler.init(option) 

const compileCodeRepo = async({ code, input }) => {
    if (!input) {
        var envData = { OS: "windows" };
        return await compiler.compilePython(envData, code, function(data){
            res.send(data)
        })
    }
    else {
        var envData = { OS: "windows" };
        return await compiler.compilePythonWithInput(envData, code, input, function(data){
            res.send(data)
        })
    }

}
module.exports = { compileCodeRepo }