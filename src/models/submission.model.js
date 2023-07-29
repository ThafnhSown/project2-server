'use strict'

const { Schema, model, Types, Collection } = require('mongoose')
const DOCUMENT_NAME = 'Submission'
const COLLECTION_NAME = 'submission'

const submissionSchema = new Schema({
    problemId: {
        type: Types.ObjectId,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        required: true
    },
    code: {
        type: String,
        required: true,
    },
    input: {
        type: String
    },
    output: {
        type: String
    }
},
{
    collection: COLLECTION_NAME,
    timestamps: {
        createdAt: "createOn",
        updatedAt: "modifiedOn"
    }
})

module.exports = model(DOCUMENT_NAME, submissionSchema)