const express = require("express");
const { createLeave } = require("../controllers/leaveController");
const router = express.Router();

router.post("/create/leave",createLeave)

module.exports= router