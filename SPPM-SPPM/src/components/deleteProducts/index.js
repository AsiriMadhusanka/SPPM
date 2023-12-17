import React, {useEffect, useState} from 'react';
import "antd/dist/antd.css";
import swal from 'sweetalert';
import useRequest from "../../services/RequestContext";
import moment from "moment";
import background from "../../images/background2.jpg";
import useUser from "../../services/UserContext";
import {Card, message, Table} from "antd";
import {viewAllOrdersColumns} from "./tableProperties";


const DeleteProducts = () => {
    const [products, setProducts] = useState();
    const {request} = useRequest();

    async function getProd() {
        try {
            let values = {
                category: '',
                id: ""
            }
            let result = await request.post("http://localhost:8000/product/searchProducts", values);
            setProducts(result.data?.Products)

            //console.log(subTot)


        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    useEffect(() => {


        getProd()
    }, []);


    function deleteFunc(Data) {
        let data = {
            id: Data.id,
            status: 'canceled'
        }

        async function deletprod(data) {
            try {
                const email = {
                    id: data.id,
                }
                let result = await request.post("http://localhost:8000/product/deleteProducts", email);


            } catch (error) {
                console.log(" error ", error);
                message.error(error.message);
            }
        }

        deletprod(data)
        getProd()
    }

    return (

        <div className style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <Card>
                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllOrdersColumns(
                        deleteFunc
                    )}
                    pagination={true}
                    dataSource={products}
                />
            </Card>
        </div>
    );
};

export default DeleteProducts;
