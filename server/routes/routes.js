const express = require("express");
const router = express.Router()

const { getStudent, addStudent } = require("../controller/student.controller")

// student routes
router.get("/api/get_students", getStudent)
router.post("/api/add_student", addStudent)

module.exports = router;