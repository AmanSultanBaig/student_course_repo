const express = require("express");
const router = express.Router()

const { getStudent, addStudent } = require("../controller/student.controller")
const { getCourse, addCourse } = require("../controller/course.controller")
const { assignCourseToUser } = require("../controller/assign_course.controller")

// student routes
router.get("/api/get_students", getStudent)
router.post("/api/add_student", addStudent)
// course routes
router.get("/api/get_courses", getCourse)
router.post("/api/add_course", addCourse)
// assign course routes
router.post("/api/assign_course", assignCourseToUser)

module.exports = router;