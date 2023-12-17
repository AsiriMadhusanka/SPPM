import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';


export const viewAllOrdersColumns = (shipped, canceled) => {


    return [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            width: 95,
            render: (value, item, index) => (1 - 1) * 10 + index + 1
        },
        {
            title: '_id',
            dataIndex: '_id',
            key: '_id',
            width: 95,
            hidden: true

        },
        {
            title: 'user name',
            dataIndex: 'u_name',
            key: 'u_name',
            width: 150
        },
        {
            title: 'product name',
            dataIndex: 'prod_name',
            key: 'prod_name',
        },
        {
            title: 'selling Price',
            dataIndex: 'sellingPrice',
            key: 'sellingPrice',
        },
        {
            title: 'quantity',
            dataIndex: 'quantity',
            key: 'quantity',

        },
        {
            title: 'ordered on',
            dataIndex: 'entered_on',
            key: 'entered_on',
        },
        {
            title: 'address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'change status to',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">


                    <Button type="link" onClick={(e) => {
                        e.preventDefault();
                        shipped({
                            id: row._id,
                        })
                    }}>
                        Shipped
                    </Button>

                </Space>
            ),
        },
        {
            title: 'change status to',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">


                    <Button type="link" onClick={(e) => {
                        e.preventDefault();
                        canceled({
                            id: row._id,
                        })
                    }}>
                        canceled
                    </Button>

                </Space>
            ),
        },
    ].filter(item => !item.hidden);
};