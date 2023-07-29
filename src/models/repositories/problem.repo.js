'use strict'

const problems = require("../problem.model")
const { getUnselectData } = require("../../utils/index");


const findOneProblem = async({ problemId, unSelect }) => {
    return await problems.findById(problemId).select(getUnselectData(unSelect)).exec()
}
const findAllProblem = async ({
    limit=18, 
    page=1,
    sort="ctime",
    filter={},
}) => {
    const skip = limit*(page-1);
    const sortBy = sort === "ctime"?{_id:-1} : {id:1};
    const documents = await problems.find(filter).sort(sortBy).limit(limit).skip(skip).lean().exec();
    return documents
}

module.exports = { findOneProblem, findAllProblem }