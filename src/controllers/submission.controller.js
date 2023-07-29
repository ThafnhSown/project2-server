'use strict'

const SubmissionService = require('../services/submission.service')
const { SuccessResponse } = require("../core/success.response")

class SubmissionController {
    static createSubmission = async(req, res, next) => { 
        return new SuccessResponse({
            message: "Compile Code",
            metadata: await SubmissionService.createSubmit({
                code: req.body,
                input: req.body
            })
        }).send(res)
    }
    static compileCode = async(req, res, next) => {
        return new SuccessResponse({
            message: "Compile Code",
            metadata: await SubmissionService.compileCode({...req.body})
        }).send(res)
    }
}

module.exports = SubmissionController;