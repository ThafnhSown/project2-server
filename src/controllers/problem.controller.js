'use strict';

const ProblemService = require("../services/problem.service");
const { Created, SuccessResponse } = require("../core/success.response")
class ProblemController {
    static addProblem = async(req,res, next) => {
      return new Created({
        message: "Adding a new Problem",
        metadata: await ProblemService.addProblem({
          ...req.body,
        })
      }).send(res);
    }
    static findOneProblem = async(req, res) => {
      new SuccessResponse({
        message: "oke",
        metadata: await ProblemService.findOneProblem({
          problemId: req.params.problemId,
        })
      }).send(res)
    }
    static getAllProblem = async(req,res) => {
      new SuccessResponse({
        message: "find all oke",
        metadata: await ProblemService.getAllProblem(req.query),
      }).send(res);
    }
}

module.exports = ProblemController;