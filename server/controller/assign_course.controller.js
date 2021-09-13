const { assign_courses } = require("../models")

const assignCourseToUser = (req, res) => {
    const data = req.body;
    assign_courses.create(data).then(result => {
        res.status(200).json({
            status: 'success',
            message: "Course Assigned Successfully",
            data: result
        })
    }).catch(e => {
        res.status(400).json({
            status: 'failed',
            message: e.message,
        })
    })
}

module.exports = {
    assignCourseToUser,
}