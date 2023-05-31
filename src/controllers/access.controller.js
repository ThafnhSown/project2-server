"use strict";

const AccessService = require("../services/access.service");
const { check, validationResult } = require("express-validator");
const { Created, SuccessResponse } = require("../core/success.response")
const { BadRequestError } = require("../core/error.response");
const asyncHandler = require("../helpers/asyncHandler");

class AccessController {
  static signUp = [
    check("email").isEmail().withMessage("Email is not valid"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password mus be at least 6 characters"),
    asyncHandler(async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new BadRequestError(res.json({ errors: errors.array() }));
      }
      new Created({
        message: "Registered successfully!",
        metadata: await AccessService.signUp(req, res), 

      }).send(res);
    }),
  ];

  static logIn = async (req, res, next) => {
    new SuccessResponse({
      message: "Login successfully!",
      metadata: await AccessService.logIn(req, res),
    }).send(res);
  };

}

module.exports = AccessController;
