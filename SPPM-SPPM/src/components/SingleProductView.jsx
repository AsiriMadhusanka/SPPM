import React, {forwardRef, useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Select} from "antd";
import useRequest from "../services/RequestContext";
import VCard from "./Card";
import './product.css'
import footer from './Footer'
import {useParams} from "react-router-dom";

const SingleProduct = () => {
    let {prod} = useParams();
    const {Option} = Select;
    const {request} = useRequest();
    const [products, setProducts] = useState();
    const [productForm] = Form.useForm();
    let result

    async function getProd(values) {
        try {

            let result = await request.post("http://localhost:8000/product/searchProducts", values);
            setProducts(result.data?.Products)
            console.log(products)


        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    useEffect(() => {

        const values = {
            category: "",
            id: prod
        }
        getProd(values)

    }, []);


    async function updateQuantity() {
        try {
            const Item = {
                id: products[0]._id,

            }
            let result = await request.post("http://localhost:8000/product/updateQuantity", Item);
            console.log(result.data)


        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    async function addToCart() {
        try {
            const Item = {
                name: products[0].name,
                sellingPrice: products[0].sellingPrice,
                filePath: products[0].filePath,
                quantity: 1,
                address: sessionStorage.address,
                email: sessionStorage.email
            }
            let result = await request.post("http://localhost:8000/cart/addToCart", Item);
            console.log(result.data)
            message.success(result.data.msg);

        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    function onClick(e) {
        e.preventDefault()
        addToCart()
        updateQuantity()
    }


    return (

        <div className='productFull' style={{paddingBottom: "30px"}}>
            <br/>

            {products?.map((item) => (
                <div>
                    <h3 style={{color: "white", textAlign: "center"}}>{products[0]?.name}</h3>
                    <br/>
                    <div style={{paddingTop: "10px", alignItems: "center"}}>

                        <img src={`http://localhost:8000/${products[0]?.filePath}`}
                             style={{height: '500px', width: '500px', marginTop: '-23px'}} alt="" class="center"/>

                        <div className='details' style={{color: "white"}}>
                            <br/>

                            {products[0]?.description.map((item) => (

                                    <h6 style={{color: "white"}}>{item}</h6>
                                )
                            )}

                        </div>

                        <Row>
                            <Col offset={10}>
                                <br/>
                                <br/>
                                <h5 style={{color: "white"}}> Quantity Available: {item.quantity}</h5>
                                <h5 style={{color: "white"}}> Price: Rs. {item.sellingPrice}.00</h5>
                                <br/>
                                <Button onClick={onClick} type="primary">Add to Cart</Button>
                                <br/>
                            </Col>
                        </Row>
                    </div>
                </div>
            ))}


        </div>


    );
};

export default SingleProduct;
