import React, { forwardRef } from 'react'
import './Card.css'
import {Button, message} from "antd";
import useRequest from "../services/RequestContext";

const VCard4 = forwardRef(({ item }, ref) => {


    return (
        <div className="CheckoutProduct">
            <img className="checkoutProduct__image"    src={`http://localhost:8000/${item?.filePath}`}  style={{height:'95px',width:'95px'}} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.prod_name}</p>

                <p className="checkoutProduct__price">
                    <small>Rs</small>
                    <strong>{item.sellingPrice}</strong>
                </p>

            </div>
            <hr/>
        </div>

    )
})
export default VCard4