const { courses } = require("../models")

const getCourse = (req, res) => {
    courses.findAll().then(result => {
        res.status(200).json({
            status: 'success',
            message: "Course Fetched Successfully",
            data: result
        })
    }).catch(e => {
        res.status(400).json({
            status: 'success',
            message: e.message,
        })
    })
}

const addCourse = (req, res) => {
    const data = req.body;
    courses.create(data).then(result => {
        res.status(200).json({
            status: 'success',
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