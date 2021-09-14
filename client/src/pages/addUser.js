import React, { useState, useEffect } from 'react';
import { Select, Button, Input, Transfer } from 'antd';
import { GET, CREATE, UPDATE } from '../config/instance'

const { Option } = Select;

function AddUser({ editObject }) {
    console.log(editObject)
    const [courseList, setCourseList] = useState([]);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [Class, setClass] = useState("1")
    const [selectedCourses, setSelectedCourses] = useState([])

    function handleChange(value) {
        setClass(value)
    }

    const handleChangeOfCourse = (value) => {
        setSelectedCourses(value)
    }

    useEffect(() => {
        setName(editObject.name)
        setEmail(editObject.email)
        setContact(editObject.contact_no)
        setClass(editObject.class)
        // setSelectedCourses(editObject.courses)

        GET("/get_courses").then(result => {
            setCourseList(result.data.data)
        }).catch(e => console.log(e))
    }, [editObject])

    const submit = () => {
        let body = {
            name,
            email,
            class: Class,
            contact_no: contact,
            courses: selectedCourses
        }
        if (editObject) {
            UPDATE(`/update_student/${editObject.id}`, body).then(result => {
                if (result.status === 200) {
                    window.location.reload()
                }
            }).catch(e => console.log(e))
        } else {
            CREATE('/add_student', body).then(result => {
                if (result.status === 200) {
                    window.location.reload()
                }
            }).catch(e => console.log(e))
        }
    }

    const reset = () => {
        setClass("1")
        setName("")
        setEmail("")
        setContact("")
        setSelectedCourses([])
    }

    return (
        <div className="container mb-5">
            <div className="row mt-4" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-md-4">
                    <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>
            </div>
            <div className="row mt-4" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-md-4" >
                    <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="row mt-4" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-md-4" >
                    <Input placeholder="Contact" value={contact} onChange={e => setContact(e.target.value)} />
                </div>
            </div>

            <div className="row mt-4" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-md-4">
                    <Select value={Class} style={{ width: '100%' }} onChange={handleChange}>
                        <Option selected value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                        <Option value="10">10</Option>
                    </Select>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }} className="mt-4">
                <Select
                    mode="tags"
                    size={"large"}
                    placeholder="Please select"
                    onChange={handleChangeOfCourse}
                    style={{ width: '100%' }}
                >
                    {
                        courseList.map((course, i) => (
                            <Option key={course.id}>{course.course_name}</Option>
                        ))
                    }
                </Select>

            </div>

            <div style={{ display: "flex", justifyContent: "center" }} className="mt-4">
                <Button type="primary" onClick={submit}>Submit</Button> &nbsp;&nbsp;
                <Button type="warning" onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}

export default AddUser