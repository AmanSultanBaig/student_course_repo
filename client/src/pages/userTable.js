import React, { useEffect, useState } from 'react'
import { Popconfirm, message } from 'antd';
import { REMOVE, GET } from '../config/instance'

import AddUser from './addUser'

function UserTable() {

    const [userList, setUserList] = useState([])
    const [editStudentObject, setEditStudentObject] = useState({})

    function confirm(id) {
        deleteUser(id)
    }

    function cancel(e) {
        console.log(e);
    }

    const deleteUser = id => {
        REMOVE(`delete_student/${id}`).then(result => {
            if (result.status == 200) {
                message.success("User Deleted Successfully")
                getUsers()
            }
        }).catch(e => console.log(e))
    }

    const getUsers = () => {
        GET("/get_students").then(result => {
            setUserList(result.data.data)
        }).catch(e => console.log(e))
    }

    useEffect(() => {
        getUsers()
    }, [])

    const editStudent = (item) => {
        setEditStudentObject(item)
    }

    return (
        <div className="container mb-5">
            <AddUser editObject={editStudentObject} />

            <div className="row">
                <div className="col-md-12  mb-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Class</th>
                                <th scope="col">Courses</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((item, i) => (
                                    <tr key={i}>
                                        <th scope="row">{item.id}</th>
                                        <th>{item.name}</th>
                                        <th>{item.email}</th>
                                        <th>{item.contact_no}</th>
                                        <th>{item.class}</th>
                                        <th>{item.courses}</th>
                                        <th>
                                            <a href="javascript:void()" onClick={() => editStudent(item)}>Edit</a>
                                            &nbsp;&nbsp;
                                            <Popconfirm
                                                title="Are you sure to delete this task?"
                                                onConfirm={() => confirm(item.id)}
                                                onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No">
                                                <a href="#">Delete</a>
                                            </Popconfirm>
                                        </th>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserTable