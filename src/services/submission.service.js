'use strict'

const compiler = require("compilex");
const submission = require("../models/submission.model");
const { compileCodeRepo } = require("../models/repositories/code.repo");
const option = { stats: true } 
compiler.init(option) 
class SubmissionService {
    static async createSubmit( code, input ) {

        var flatData = { output: ''}
        if (!input) {
            var envData = { OS: "windows" };
            compiler.compilePython(envData, code, function(data){
                flatData.output = data.output
                console.log(flatData)
            })
        }
        else {
            var envData = { OS: "windows" };
            compiler.compilePythonWithInput(envData, code, input, function(data){
                flatData.output = data.output
                console.log(flatData, input)
            })
        }
        // if (!input) {
        //     var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
        //     compiler.compileCPP(envData, code, function (data) {
        //         if (data.output) {
        //           return data
        //         }
        //         else {
        //             return new BadRequestError("Error")
        //         }
        //     });
        // }
        // else {
        //     var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
        //     compiler.compileCPPWithInput(envData, code, input, function (data) {
        //         if (data.output) {
        //             return data
        //         }
        //         else {
        //             return new BadRequestError("Error")
        //         }
        //     });
        //   }
        const newSubmission = await submission.create({
            userId: "11",
            problemId: "1",
            code,
            input, 
            output: flatData.output
        })
        return newSubmission
    }

    static async compileCode(body) {
        const { code, input } = body;
        var flatData = 's'
        if (!input) {
            var envData = { OS: "windows" };
            compiler.compilePython(envData, code, function(data){
                return data.output;
                flatData.output = data.output
                console.log(flatData)
            })
        }
        else {
            var envData = { OS: "windows" };
            compiler.compilePythonWithInput(envData, code, input, function(data){
                flatData = data.output
                console.log(flatData, input)
                return flatData
            })
        }
    }
}

module.exports = SubmissionService