"use strict";

const express = require("express");
const ProblemController = require("../../controllers/problem.controller");
const asyncHandler = require("../../helpers/asyncHandler");
const router = express.Router();

router.post("/add", asyncHandler(ProblemController.addProblem));
router.get("/all", asyncHandler(ProblemController.getAllProblem));
router.get("/:problemId", asyncHandler(ProblemController.findOneProblem))

module.exports = router;
  