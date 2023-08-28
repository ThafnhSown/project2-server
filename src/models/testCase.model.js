'use strict'

const { Schema, model, Types} = require('mongoose')
const DOCUMENT_NAME = 'TestCase'
const COLLECTION_NAME = 'testcase'

const testCaseSchema = new Schema({
    problemId: {
        type: Types.ObjectId,
        required: true
    },
    input: {
        type: Array, 
        required: true
    },
    output: {
        type: Array,
        required: true,
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
}

)

module.exports = model(DOCUMENT_NAME, testCaseSchema)