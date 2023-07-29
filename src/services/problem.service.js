"use strict";

const problemModel = require("../models/problem.model")
const { NotFoundError } = require("../core/error.response")

const {findOneProblem, findAllProblem } = require("../models/repositories/problem.repo")
class ProblemService {
   static async addProblem(body) {
    const {
        title,
        difficulty, 
        acceptance,
        description, 
        exampleIn,
        exampleOut
    } = body;

    const newProblem = await problemModel.create({
        title,
        difficulty, 
        acceptance,
        description, 
        exampleIn,
        exampleOut
    });

    return newProblem;
   }
   static async findOneProblem({ problemId }) {
    const foundProblem = await findOneProblem({ problemId , unSelect: ["__v"]});
    if(!foundProblem) throw new NotFoundError("Cannot find this book")
    return foundProblem
   }
   
   static async getAllProblem({
    limit = 0,
    page = 1,
    sort = "ctime",
   }) {
    return await findAllProblem({
      limit,
      sort,
      page,
      select: ["title", "difficulty", "acceptance", "description", "exampleIn", "exampleOut"],
    })
   }
   static async findAllProblemsForUser({
    limit=10, title, page=1, sort='ctime'
   }) {
    return await findAllProblemsForUser({
      limit, title, page, sort, select: ["title", "difficulty", "acceptance", "description", "exampleIn", "exampleOut"]
    })
   }
}



module.exports = ProblemService;