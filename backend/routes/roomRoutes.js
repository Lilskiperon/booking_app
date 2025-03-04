const express = require("express");

const {getAvailableRooms, getAllRooms, createRoom, updateRoom, deleteRoom,getRoomById } = require("../controllers/roomController");

const router = express.Router();

router.get("/", getAllRooms);
router.post("/", createRoom);
router.get('/:id', getRoomById);
router.put("/:id", updateRoom); // Edit a room
router.delete("/:id", deleteRoom); // Delete a room
router.get("/available", getAvailableRooms);

module.exports = router;
