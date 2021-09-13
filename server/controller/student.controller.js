const { students } = require("../models")

const getStudent = (req, res) => {
    students.findAll().then(result => {
        res.status(200).json({
            status: 'success',
            message: "Student Added Successfully",
            data: result
        })
    }).catch(e => {
        res.status(400).json({
            status: 'success',
            message: e.message,
        })
    })
}

const addStudent = (req, res) => {
    const data = req.body;
    students.create(data).then(result => {
        res.status(200).json({
            status: 'success',
            message: "Student Added Successfully",
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
    addStudent,
    getStudent
}