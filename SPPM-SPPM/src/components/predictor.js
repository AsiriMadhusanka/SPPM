import React, {useEffect, useState} from "react";
import {Form, Input, Button, DatePicker, Radio, Select, Checkbox} from "antd";
import "./stylesSignup.css";
import "antd/dist/antd.css";
import swal from 'sweetalert';
import useRequest from "../services/RequestContext";
import moment from "moment";
import background from "../images/background2.jpg";

// Create a new Customer
function Predictor() {

    const [ips, setIps] = useState([]);
    const [touch, setTouch] = useState([]);
    const [predValue, setPredValue] = useState();
    const {Option} = Select;
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 14,
        },
    };

    const validateMessages = {
        required: "${label} is required!",

        types: {
            number: "${label} is not a valid number!",
        },
    };

    const {request} = useRequest();

    const onFinish = async (values) => {

        values.ips = ips
        values.touchscreen = touch

        console.log("value", values);
        try {
            const result = await request.post("http://localhost:5000/", values);
            let val=result.data.prediction
            setPredValue(val)
            console.log (result)
        } catch (e) {
            console.log("post create customer error ", e);
        }
    };


    // Demo
    const [form] = Form.useForm();

    const [value] = React.useState(1);

    function onIps() {
        setIps([true])
    }

    function onTouch() {
        setTouch([true])
    }




    return (
        <>
            <div className style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                <div className="main-container-signup">
                    <div className="form-common">
                        <h1><h1>Price predictor</h1></h1>

                        <Form
                            layout="vertical"
                            form={form}
                            name="signupCustomer"
                            onFinish={onFinish}
                            validateMessages={validateMessages}
                        >
                            <Form.Item
                                name={["ram"]}
                                label="ram"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name={["weight"]}
                                label="weight"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name={"company"}
                                label="company"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value="" selected hidden>Select</Option>
                                    <Option value="acer">Acer</Option>
                                    <Option value="apple">Apple</Option>
                                    <Option value="asus">Asus</Option>
                                    <Option value="dell">Dell</Option>
                                    <Option value="hp">HP</Option>
                                    <Option value="lenovo">Lenovo</Option>
                                    <Option value="msi">MSI</Option>
                                    <Option value="toshiba">Toshiba</Option>
                                    <Option value="other">Other</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={"typename"}
                                label="type name"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value="" selected hidden>Select</Option>
                                    <Option value="2in1convertible">2 in 1 Convertible</Option>
                                    <Option value="gaming">Gaming</Option>
                                    <Option value="netbook">Net Book</Option>
                                    <Option value="notebook">Note Book</Option>
                                    <Option value="ultrabook">Ultra Book</Option>
                                    <Option value="workstation">Workstation</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={"opsys"}
                                label="Operating System"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value="" selected hidden>Select</Option>
                                    <Option value="windows">Windows</Option>
                                    <Option value="mac">Mac</Option>
                                    <Option value="linux">Linux</Option>
                                    <Option value="other">Other</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={"cpuname"}
                                label="cpu name"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value="" selected hidden>Select</Option>
                                    <Option value="intelcorei3">Intel Core i3</Option>
                                    <Option value="intelcorei5">Intel Core i5</Option>
                                    <Option value="intelcorei7">Intel Core i7</Option>
                                    <Option value="amd">AMD</Option>
                                    <Option value="other">Other</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={"gpuname"}
                                label="gpu name"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value="" selected hidden>Select</Option>
                                    <Option value="intel">Intel</Option>
                                    <Option value="amd">AMD</Option>
                                    <Option value="nvidia">Nvidia</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item name="ips" valuePropName="ips" wrapperCol={{offset: 8, span: 16}}>
                                <Checkbox onChange={onIps}> IPS</Checkbox>
                            </Form.Item>
                            <Form.Item name="touchscreen" valuePropName="touchscreen"
                                       wrapperCol={{offset: 8, span: 16}}>
                                <Checkbox onChange={onTouch}>touch screen</Checkbox>
                            </Form.Item>
                            <hr></hr>

                            <hr></hr>
                            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                                {/* <Link to ="/All_Data" > */}
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                {/* </Link> */}
                                &nbsp;
                                <Button href="/login" type="button" class="btn btn-outline-secondary"
                                        style={{marginLeft: "0px"}}> Cancel </Button>
                                <br/>

                            </Form.Item>

                            {predValue ?
                                <>
                                  <h3> Predicted value : <br/>Rs. {predValue}.00 </h3>
                                </> : ""}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Predictor;