const express = require("express");
const { register, login } = require("../controllers/user.controller");
const { registerRules, validator } = require("../middlewares/validator");

const Router = express.Router();

Router.post(`/register`, registerRules(), validator, register);
Router.post("/login", login);

module.exports = Router;
