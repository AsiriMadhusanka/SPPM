import React, { forwardRef } from 'react'
import './Card.css'
import {Button, message} from "antd";
import useRequest from "../services/RequestContext";
import {useHistory} from "react-router-dom";

const VCard2 = forwardRef(({ item }, ref) => {

    const {request} = useRequest();
    const history = useHistory();


    async function addToCart() {
        try {
            const Item ={
                name:item.name,
                sellingPrice:item.sellingPrice,
                filePath:item.filePath,
                quantity:1,
                email:sessionStorage.email
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
    }


    async function deleteitemk(param) {
        try {

            let result = await request.post("http://localhost:8000/cart/deleteItem", param);
            console.log(result.data)
            message.success(result.data.msg);
            history.replace('/Cart')

        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    function deleteOnClick(param) {
        deleteitemk(param).then(window.location.reload(false))
    }

    return (
        <div className="CheckoutProduct">
            <img className="checkoutProduct__image" src={`http://localhost:8000/${item?.filePath}`} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title" style={{color: "white"}}>{item.prod_name}</p>
                <p className="checkoutProduct__price" style={{color: "white"}}>
                    <small>Rs.</small>
                    <strong>{item.sellingPrice}</strong>
                </p>
                <Button type="primary" danger={true} onClick={(e) => {
                    e.preventDefault();
                    deleteOnClick({
                        id: item._id,
                    })
                }}>Remove from Basket</Button>
            </div>
        </div>


    )
})
export default VCard2