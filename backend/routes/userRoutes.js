const express = require("express");
const { getUsers, createUser, getUserInfo, getMe } = require("../controllers/userController");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/me", authenticateToken, getMe);
router.get("/info", authenticateToken, getUserInfo);
module.exports = router;
