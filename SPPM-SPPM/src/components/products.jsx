import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Select} from "antd";
import useRequest from "../services/RequestContext";
import VCard from "./Card";
import './product.css'
import footer from './Footer'
const Products = () => {
    const {Option} = Select;
    const {request} = useRequest();
    const [products, setProducts] = useState();
    const [productForm] = Form.useForm();

    async function getProd(values) {
        try {

            const Values = {
                category: values.category,
                id:""
            }

            let result = await request.post("http://localhost:8000/product/searchProducts", Values);
            setProducts(result.data?.Products)

        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    useEffect(() => {
        productForm.setFieldsValue({category: ""});
        const values = {
            category: "",
            id:""
        }
        getProd(values)

    }, []);

    return (
        <div className="Product-main">

            <Form
                layout="vertical"
                onFinish={getProd}
                name={"productForm"}
                form={productForm}
            >
                <Row style={{width: '100%'}}>
                    <Col offset={1} span={8}>
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
                    </Col>
                </Row>
                <Row style={{width: '100%'}}>
                    <Col offset={1} span={5}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                search
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>

            <br/>
            <div className="container">

                <div className="row hidden-md-up">

                    {products?.map((item) => (
                        <VCard key={item.id} item={item}/>
                    ))}

                </div>
                <br/>
                <footer/>
            </div>

        </div>
    );
};

export default Products;
