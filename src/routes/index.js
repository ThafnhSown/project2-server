"use strict";

const express = require("express");
const router = express.Router();

router.use("/v1/api", require("./access"));
router.use("/v1/api/code", require("./submission"))
router.use("/v1/api/user", require("./user"))
router.use("/v1/api/problem", require("./problem"))


module.exports = router;
