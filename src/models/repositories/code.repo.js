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

const compileCPPAsync = async (envData, code) =>{
    return new Promise((resolve, reject) => {
      compiler.compileCPP(envData, code, function (data) {
        resolve(data);
      });
    });
  }

  const compileCPPWithInputAsync = async (envData, code, input) => {
    return new Promise((resolve, reject) => {
      compiler.compileCPPWithInput(envData, code, input, function (data) {
        resolve(data);
      });
    });
  }

const compilePythonAsync = async (envData, code) =>{
    return new Promise((resolve, reject) => {
      compiler.compilePython(envData, code, function (data) {
        resolve(data);
      });
    });
  }

    const compilePythonWithInputAsync = async (envData, code, input) => {
    return new Promise((resolve, reject) => {
      compiler.compilePythonWithInput(envData, code, input, function (data) {
        resolve(data);
      });
    });
  }
  
module.exports = { compileCodeRepo, compileCPPAsync, compileCPPWithInputAsync, compilePythonAsync, compilePythonWithInputAsync}