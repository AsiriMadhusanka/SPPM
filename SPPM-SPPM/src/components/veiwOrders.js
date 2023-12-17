import React, {useEffect, useState} from 'react';
import './Orders.css'
import {message} from "antd";
import useRequest from "../services/RequestContext";
import VCard3 from "./Card3";
import CurrencyFormat from "react-currency-format";

const ViewOrders = () => {

    let sub = 0;
    const {request} = useRequest();
    const [products, setProducts] = useState();
    const [subTot, setSubTot] = useState(0);

    useEffect(() => {

        async function getProd() {
            try {
                const email = {
                    email: sessionStorage.email,
                    type: 'order'
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

    useEffect(() => {
        {
            products?.map((item) => (
                sub = parseInt(sub) + parseInt(item.sellingPrice)
            ))
        }
        setSubTot(sub)
    }, [products]);

    return (
        <div>
            <div className='orders' >
                <h1 style={{color: "white"}}>Your Orders</h1>

                <div className="order" style={{color: "white"}}>
                   <br/>
                   <br/>
                   <br/>
                    {/*<p>{moment.unix(item.orederdOn).format("MMMM Do YYYY, h:mma")}</p>*/}


                    {products?.map((item) => (
                        <VCard3 key={item.id} item={item}/>
                    ))}

                    <CurrencyFormat style={{color: "white"}}
                        renderText={(value) => (
                            <h3 style={{color: "white"}} className="order__total">Order Total: {value}</h3>
                        )}
                        decimalScale={2}
                        value={subTot}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rs. "}
                    />
                </div>

            </div>
        </div>
    );
};

export default ViewOrders;
