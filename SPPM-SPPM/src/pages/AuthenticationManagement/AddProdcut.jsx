import React, {useState} from "react";
import {Form, Input, Button, DatePicker, Radio, Upload, Select, Col} from "antd";
import "./stylesSignup.css";
import "antd/dist/antd.css";
import swal from 'sweetalert';
import useRequest from "../../services/RequestContext";
import moment from "moment";
import background from "../../images/background2.jpg";
import useUser from "../../services/UserContext";


function Add_Product() {

    const {Option} = Select;
    const {user} = useUser();
    const {request} = useRequest();
    const [imgae, setImgae] = useState([]);

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    }

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 14,
        },
    };

    console.log(localStorage.token)


    const onFinish = async (values) => {


        console.log("value", imgae);
        const formDat = new FormData()
        formDat.append('image', imgae)

        values.addedBy = user.email
        values.dateOfArrival = moment(values.dateOfArrival).format("YYYY-MM-DD");
        formDat.append("name", values.name)
        formDat.append("price", values.price)
        formDat.append("sellingPrice", values.sellingPrice)
        formDat.append("dateOfArrival", values.dateOfArrival)
        formDat.append("addedBy", values.addedBy)
        formDat.append("quantity", values.quantity)
        formDat.append("category", values.category)
        formDat.append("description", values.description)
        try {
            const result = await request.post("http://localhost:8000/product/addProduct", formDat);
            console.log("api call sign up customer result ", result);
            await swal({text: "Successfully Created", icon: "success", button: "Okay!"})

        } catch (e) {
            console.log("post create customer error ", e);
        }
    };

    const [form] = Form.useForm();

    const [value] = React.useState(1);

    function handleChange(e) {
        console.log(e)
        setImgae(e.file)
    }

    return (
        <>
            <div className style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                <div className="main-container-signup">
                    <div className="form-common">
                        <h1><h1>ADD New Product</h1></h1>

                        <Form
                            layout="vertical"
                            form={form}
                            name="addProduct"
                            onFinish={onFinish}

                        >
                            <Form.Item
                                name={["name"]}
                                label="Product Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input allowClear/>
                            </Form.Item>
                            <Form.Item
                                name={["price"]}
                                label="Product price"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input allowClear/>
                            </Form.Item>
                            <Form.Item
                                name={["sellingPrice"]}
                                label="Product selling price"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input allowClear/>
                            </Form.Item>
                            <Form.Item
                                name={["quantity"]}
                                label="Product quantity"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input allowClear/>
                            </Form.Item>
                            <Form.Item
                                name={["description"]}
                                label="Product description"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item
                                name={"category"}
                                label="Category"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value=''>All</Option>
                                    <Option value="pc">PC</Option>
                                    <Option value="MONITORS">MONITORS</Option>
                                    <Option value="LAPTOPS">LAPTOPS</Option>
                                    <Option value="CONSOLE GAMING">CONSOLE GAMING</Option>
                                    <Option value="MOTHERBOARDS">MOTHERBOARDS</Option>
                                    <Option value="MEMORY(RAM)">MEMORY(RAM)</Option>
                                    <Option value="PROCESSORS">PROCESSORS</Option>
                                    <Option value="GRAPHIC CARDS">GRAPHIC CARDS</Option>
                                    <Option value="COOLING AND LIGHTING">COOLING AND LIGHTING</Option>
                                    <Option value="POWER SUPPLY, UPS & SURGE PROTECTORS">POWER SUPPLY, UPS & SURGE PROTECTORS</Option>
                                    <Option value="KEYBOARDS, MICE & GAMEPADS">KEYBOARDS, MICE & GAMEPADS</Option>
                                    <Option value="SPEAKERS & HEADPHONES">SPEAKERS & HEADPHONES</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={["dateOfArrival"]}
                                label="Date of Arrival"
                                rules={[{required: true}]}
                            >
                                <DatePicker/>
                            </Form.Item>
                            <Form.Item
                                name={["image"]}
                                label="Photo"
                                rules={[{required: true}]}

                            >
                                <Upload name="image"
                                        showUploadList={false}
                                        //customRequest={dummyRequest}
                                        beforeUpload={() => false}
                                        onChange={(e)=>handleChange(e)}

                                        multiple={false}


                                >
                                    <Input />
                                </Upload>
                            </Form.Item>
                            <br/>
                            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                                {/* <Link to ="/All_Data" > */}
                                <Button type="primary" htmlType="submit">
                                    Add
                                </Button>
                                {/* </Link> */}
                                &nbsp;
                                <Button href="/login" type="button" class="btn btn-outline-secondary"
                                        style={{marginLeft: "0px"}}> Cancel </Button>
                                <br/>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add_Product;
