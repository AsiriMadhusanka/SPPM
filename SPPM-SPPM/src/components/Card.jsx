import React, {forwardRef} from 'react'
import './Card.css'
import {Button, message} from "antd";
import useRequest from "../services/RequestContext";
import {Link} from "react-router-dom";
import SingleProduct from "./SingleProductView";

const VCard = forwardRef(({item}, ref) => {

    const {request} = useRequest();

    async function updateQuantity() {
        try {
            const Item = {
                id: item._id,

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
                name: item.name,
                sellingPrice: item.sellingPrice,
                filePath: item.filePath,
                quantity: 1,
                address:sessionStorage.address,
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
        <div className="col-md-3">
            <div className='card-container'>
                <div className='product'>
                    <div className="product__info">
                        <p><h5>{item.name}</h5></p>
                        <p className="product__price">
                            <small>Rs. </small>
                            <strong>{item.sellingPrice}</strong>
                        </p>
                        <div className="product__disc">

                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>

                    <img src={`http://localhost:8000/${item?.filePath}`}
                         style={{height: '190px', width: '190px', marginTop: '-23px'}} alt=""/>


                    <button><Link to={`/SingleProduct/${item._id}`}>Veiw details</Link></button>

                </div>
            </div>
            <hr style={{height:3}}/>
        </div>
    )
})
export default VCard