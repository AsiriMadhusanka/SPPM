import React, {forwardRef, useEffect, useState} from 'react';
import './checkout.css'
import {message} from "antd";
import useRequest from "../services/RequestContext";
import VCard2 from "./Card2";
import VCard3 from "./Card3";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import VCard4 from "./Card4";

const CheckOut = forwardRef(({total}, ref) => {

    let sub = 0
    const stripe = useStripe();
    const {request} = useRequest();
    const [products, setProducts] = useState();
    const [subTot, setSubTot] = useState(0);
    const history = useHistory();

    const elements = useElements();
    const [prodId, setProdId] = useState([]);
    const [prodId2, setProdId2] = useState([]);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const handleChange = (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    useEffect(() => {
        {
            products?.map((item) => (
                sub = parseInt(sub) + parseInt(item.sellingPrice)
            ))
            products?.map((items) => (
                setProdId([...prodId, items._id]),
                    setProdId2([...prodId, items._id])
            ))
        }
        setSubTot(sub)
    }, [products]);

    useEffect(() => {
        const getClientSecret = async () => {

            let nsub = subTot * 100
            console.log("stripe", subTot)
            console.log("id", prodId2)
            const response = await axios({
                method: "post",
                // Stripe expects the total in a currencies subunits

                url: `http://localhost:8000/payments/create?total=${nsub}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        if (subTot != 0) {
            getClientSecret();
        }

    }, [products]);

    useEffect(() => {

        async function getProd() {
            try {
                const email = {
                    email: sessionStorage.email,
                    type: 'cart'
                }
                let result = await request.post("http://localhost:8000/cart/getCart", email);
                setProducts(result.data?.cart)

                console.log(subTot)


            } catch (error) {
                console.log(" error ", error);
                message.error(error.message);
            }
        }

        getProd()
    }, []);


    async function createOrder() {
        try {
            console.log(processing)

            try {
                const email = {
                    email: sessionStorage.email,
                    type: 'cart'
                }
                let result = await request.post("http://localhost:8000/cart/createOrderItems", email);
                message.success(result.data.msg);
                console.log(" result ", result);
                history.replace('/ViewOrders')

            } catch (error) {
                console.log(" error ", error);
                message.error(error.message);
            }


        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }


    const handleSubmit = async (event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        })
        setSucceeded(true)
        createOrder()
        setError(null)
        setProcessing(false)
        console.log(succeeded)


    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h2>
                    Checkout (<Link to="/checkout">{products?.length} items</Link>)
                </h2>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        {/*<p>{user?.email}</p>*/}
                        {sessionStorage.address}

                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                        <div className="container">
                            <div className="row hidden-md-up">
                                {products?.map((item) => (
                                    <VCard4 key={item.id} item={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="payment__items">

                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h5>Payment Method</h5>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <br/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => <h5>Order Total: {value} <br/></h5>}
                                    decimalScale={2}
                                    value={subTot}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rs."}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? "Processing" : "Buy Now"}</span>
                                </button>
                            </div>


                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CheckOut;
