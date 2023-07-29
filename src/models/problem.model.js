'use strict'

const { Schema, model} = require('mongoose')
const DOCUMENT_NAME = 'Problem'
const COLLECTION_NAME = 'problem'

const problemSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    difficulty: {
        type: String,
        required: true,
    },
    acceptance: {
        type: Number, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    exampleIn: {
        type: String, 
        required: true
    },
    exampleOut: {
        type: String, 
        required: true
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
}

)

module.exports = model(DOCUMENT_NAME, problemSchema)