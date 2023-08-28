'use strict'

const submission = require("../models/submission.model");
const { compileCPPAsync, compileCPPWithInputAsync, compilePythonWithInputAsync  } = require("../models/repositories/code.repo");
const problem = require("../models/problem.model")
const testCase = require("../models/testCase.model")

class SubmissionService {
    static async createSubmit(problemId) {
      // const { userId, problemId, code } = body

      const testcases = await testCase.aggregate([
        {
          $lookup: {
            from: "problem",
            localField: "problemId",
            foreignField: "_id",
            as: "test"
          }
        },
        {
          $match: { problemId: problemId}
        }
      ])

        // var envData = { OS: "windows" };
        // const data = await compilePythonWithInputAsync(envData, code, input);
        // flatData.output = data.output;
        // console.log(flatData, input);
        
        // const newSubmission = await submission.create({
        //     userId,
        //     problemId,
        //     code,
        //     input, 
        //     output: flatData.output
        // })
        // return newSubmission
        return testcases
    }
  
  static async compileCode(body) {
    const { code, input } = body;
    console.log(code, input);
    let flatData = {output: ''};
  
    if (!input) {
      var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
      const data = await compileCPPAsync(envData, code);
      flatData.output = data.output;
    } else {
      var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
      const data = await compileCPPWithInputAsync(envData, code, input);
      flatData.output = data.output;
      console.log(flatData, input);
    }
  
    return flatData;
  }
}

module.exports = SubmissionService