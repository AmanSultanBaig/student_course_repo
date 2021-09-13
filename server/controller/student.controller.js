const { students } = require("../models")

const getStudent = (req, res) => {
    students.findAll().then(result => {
        res.status(200).json({
            status: 'success',
            message: "Student Fetched Successfully",
            data: result
        })
    }).catch(e => {
        res.status(400).json({
            status: 'failed',
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
            status: 'failed',
            message: e.message,
        })
    })
}

const editStudent = (req, res) => {
    students.update(req.body, { where: { id: req.params.id } }).then(result => {
        res.status(200).json({
            status: 'success',
            message: "Student Updated Successfully",
        })
    }).catch(e => {
        res.status(400).json({
            status: 'failed',
            message: e.message,
        })
    })
}

const removeStudent = (req, res) => {
    const id = req.params.id;
    students.destroy({
        where: { id: id }
    }).then(result => {
        res.status(200).json({
            status: 'success',
            message: "Student Deleted Successfully",
        })
    }).catch(e => {
        res.status(400).json({
            status: 'failed',
            message: e.message,
        })
    })
}

module.exports = {
    addStudent,
    getStudent,
    editStudent,
    removeStudent,
}