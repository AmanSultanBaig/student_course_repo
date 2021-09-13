const express = require("express");
const router = express.Router()

const { getStudent, addStudent } = require("../controller/student.controller")
const { getCourse, addCourse } = require("../controller/course.controller")

// student routes
router.get("/api/get_students", getStudent)
router.post("/api/add_student", addStudent)
// course routes
router.get("/api/get_courses", getCourse)
router.post("/api/add_course", addCourse)

module.exports = router;