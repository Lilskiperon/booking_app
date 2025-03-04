const express = require("express");
const { loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/login", loginUser); // POST /api/auth/login

module.exports = router;
