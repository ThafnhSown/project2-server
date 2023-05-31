'use strict'

const express = require("express");
const codeController = require("../../controllers/code.controller");
const router = express.Router();
const asyncHandler = require("../../helpers/asyncHandler");

router.post('/compile', asyncHandler(codeController.pushCode));

module.exports = router;
