import React, {useEffect, useState} from 'react';
import "antd/dist/antd.css";
import swal from 'sweetalert';
import useRequest from "../../services/RequestContext";
import moment from "moment";
import background from "../../images/background2.jpg";
import useUser from "../../services/UserContext";
import {Card, message, Table} from "antd";
import {viewAllOrdersColumns} from "./tableProperties";


const AdminOreders = () => {
    const [products, setProducts] = useState();
    const {request} = useRequest();

    async function getProd() {
        try {
            const email = {
                type: 'order'
            }
            let result = await request.post("http://localhost:8000/cart/getOrderItems", email);
            setProducts(result.data?.cart)

            //console.log(subTot)


        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    useEffect(() => {



        getProd()
    }, []);



    function shipped(Data) {
        let data = {
            id:Data.id,
            status:'shipped'
        }
        async function updateStatus(data) {
            try {
                const email = {
                    id: data.id,
                    status: data.status
                }
                let result = await request.post("http://localhost:8000/cart/updateStatus", email);


                //console.log(subTot)


            } catch (error) {
                console.log(" error ", error);
                message.error(error.message);
            }
        }
        updateStatus(data)
        getProd()
    }

    function canceled(Data) {
        let data = {
            id:Data.id,
            status:'canceled'
        }
        async function updateStatus(data) {
            try {
                const email = {
                    id: data.id,
                    status: data.status
                }
                let result = await request.post("http://localhost:8000/cart/updateStatus", email);


                //console.log(subTot)


            } catch (error) {
                console.log(" error ", error);
                message.error(error.message);
            }
        }
        updateStatus(data)
        getProd()
    }

    return (

        <div className style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <Card>
                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllOrdersColumns(
                        shipped,
                        canceled
                    )}
                    pagination={true}
                    dataSource={products}
                />
            </Card>
        </div>
    );
};

export default AdminOreders;
