const express = require("express");
const { getUser, createUser, getAllUsers } = require("../controllers/userController");
const router = express.Router();

router.get("/user/:id",getUser)
router.get("/users",getAllUsers)
router.post("/create/user",createUser)

module.exports= router