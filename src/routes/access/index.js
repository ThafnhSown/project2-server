'use strict'

const express = require('express');
const AccessController = require('../../controllers/access.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router();

router.post("/user/signup", AccessController.signUp);
router.post("/user/login", asyncHandler(AccessController.logIn));


module.exports = router;