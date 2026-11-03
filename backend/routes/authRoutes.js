const express = require("express");
const routerL = express.Router();

const { login } = require("../controllers/authController");

routerL.post("/login", login);

module.exports = routerL