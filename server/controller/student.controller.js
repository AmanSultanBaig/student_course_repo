const db = require("../models");
const Student = db.student;
const Course = db.course;

const getStudent = (req, res) => {
    Student.findAll({
        include: [
            {
                model: Course,
                as: "courses",
                attributes: [],
                through: {
                    attributes: [],
                }
            },
        ],
    }).then(result => {
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
    Student.create(data).then(result => {
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
    Student.update(req.body, { where: { id: req.params.id } }).then(result => {
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
    Student.destroy({
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