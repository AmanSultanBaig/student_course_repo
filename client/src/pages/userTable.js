import React from 'react'
import { Popconfirm, message } from 'antd';
import { REMOVE } from '../config/instance'

function userTable() {

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
            }
        }).catch(e => console.log(e))
    }

    let userData = [
        {
            id: 1,
            name: "User1",
            email: "user1@gmail.com",
            contact: "12343233",
            class: "1",
            courses: ["Eng", "Math"]
        },
        {
            id: 1,
            name: "User1",
            email: "user1@gmail.com",
            contact: "12343233",
            class: "1",
            courses: ["Eng", "Math"]
        },
        {
            id: 1,
            name: "User1",
            email: "user1@gmail.com",
            contact: "12343233",
            class: "1",
            courses: ["Eng", "Math"]
        },
        {
            id: 1,
            name: "User1",
            email: "user1@gmail.com",
            contact: "12343233",
            class: "1",
            courses: ["Eng", "Math"]
        },
    ]

    return (
        <div className="container mb-5">
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
                                userData.map((item, i) => (
                                    <tr key={i}>
                                        <th scope="row">{item.id}</th>
                                        <th>{item.name}</th>
                                        <th>{item.email}</th>
                                        <th>{item.contact}</th>
                                        <th>{item.class}</th>
                                        <th>{item.courses.join(",")}</th>
                                        <th>
                                            <a href="#">Edit</a>
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

export default userTable