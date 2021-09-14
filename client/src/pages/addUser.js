import React, { useState, useEffect } from 'react';
import { Select, Button, Input, Transfer } from 'antd';
import { GET } from '../config/instance'

const { Option } = Select;

function AddUser() {

    const [courseList, setCourseList] = useState([]);
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);

    const onChange = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
    };

    const onScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    useEffect(() => {
        GET("/get_courses").then(result => {
            setCourseList(result.data.data)
           let indexs = result.data.data.map((item,i) => i)
           setTargetKeys(indexs)
        }).catch(e => console.log(e))
    }, [])

    return (
        <div className="container mb-5">
            <div className="row mt-4" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-md-4">
                    <Input placeholder="Basic usage" />
                </div>
            </div>
            <div className="row mt-4" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-md-4" >
                    <Input placeholder="Basic usage" />
                </div>
            </div>
            <div className="row mt-4" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-md-4">
                    <Select defaultValue="1" style={{ width: '100%' }} onChange={handleChange}>
                        <Option value="1">1</Option>
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

            <div style={{ display: "flex", justifyContent: "center" }} className="mt-5">
                <Transfer
                    dataSource={courseList}
                    titles={['All Courses', 'Selected']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={onChange}
                    onSelectChange={onSelectChange}
                    onScroll={onScroll}
                    render={item => item.course_name}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }} className="mt-4">
                <Button type="primary">Submit</Button> &nbsp;&nbsp;
                <Button type="warning">Reset</Button>
            </div>
        </div>
    )
}

export default AddUser