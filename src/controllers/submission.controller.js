'use strict';

const SubmissionService = require('../services/submission.service');
const { SuccessResponse } = require('../core/success.response');

class SubmissionController {
    static async createSubmission(req, res, next) {
        try {
            const metadata = await SubmissionService.createSubmit({
                code: req.body.code,
                input: req.body.input
            });

            const response = new SuccessResponse({
                message: 'Compile Code',
                metadata
            });

            response.send(res);
        } catch (error) {
            next(error);
        }
    }

    static async compileCode(req, res, next) {
        try {
            const metadata = await SubmissionService.compileCode({ ...req.body });

            const response = new SuccessResponse({
                message: 'Compile Code',
                metadata
            });

            response.send(res);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = SubmissionController;
