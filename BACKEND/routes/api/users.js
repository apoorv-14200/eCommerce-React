const express = require("express");
const router = express.Router();
const userController = require("../../controller/usercontroller");
const passport = require("passport");

router.post("/login", userController.createSession); //No auth

router.post("/signup", userController.signup); //No auth

module.exports = router;
