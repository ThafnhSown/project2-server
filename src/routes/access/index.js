"use strict";

const express = require("express");
const AccessController = require("../../controllers/access.controller");
const asyncHandler = require("../../helpers/asyncHandler");
const router = express.Router();

router.post("/auth/signup", AccessController.signUp);
router.post("/auth/login", asyncHandler(AccessController.logIn));
router.get("/oauth/success", asyncHandler(AccessController.oauthSuccess));

module.exports = router;
