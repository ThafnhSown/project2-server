'use strict' 

const codeService = require('../services/code.service')
const SuccessResponse = require('../core/success.response')

class CodeController {
    pushCode = async(req, res, next) => {
        new SuccessResponse( {
            message: 'Create a new Cart success',
            metadata: await codeService.pushCode(req.body)
        }).send(res)
    }
}
module.exports = CodeController