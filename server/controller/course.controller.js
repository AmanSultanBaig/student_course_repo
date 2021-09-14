const db = require("../models");
const Student = db.student;
const Course = db.course;

const getCourse = (req, res) => {
    Course.findAll().then(result => {
        res.status(200).json({
            status: 'success',
            message: "Course Fetched Successfully",
            data: result
        })
    }).catch(e => {
        res.status(400).json({
            status: 'failed',
            message: e.message,
        })
    })
}

const addCourse = (req, res) => {
    const data = req.body;
    Course.create(data).then(result => {
        res.status(200).json({
            status: 'failed',
            message: "Course Added Successfully",
            data: result
        })
    }).catch(e => {
        res.status(400).json({
            status: 'success',
            message: e.message,
        })
    })
}

module.exports = {
    addCourse,
    getCourse
}