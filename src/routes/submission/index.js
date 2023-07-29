'use strict'

const express = require("express");
const SubmissionController = require("../../controllers/submission.controller");
const asyncHandler = require("../../helpers/asyncHandler");
const router = express.Router();

router.post('/submit', asyncHandler(SubmissionController.createSubmission))
router.post('/compile', SubmissionController.compileCode)

module.exports = router;
  