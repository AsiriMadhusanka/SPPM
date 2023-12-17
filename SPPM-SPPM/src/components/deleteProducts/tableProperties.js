import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';


export const viewAllOrdersColumns = (deleteFunc) => {


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
            title: ' name',
            dataIndex: 'name',
            key: 'name',
            width: 150
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'sellingPrice',
            dataIndex: 'sellingPrice',
            key: 'sellingPrice',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'quantity',
            dataIndex: 'quantity',
            key: 'quantity',

        },
        {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'delete',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">


                    <Button type="link" onClick={(e) => {
                        e.preventDefault();
                        deleteFunc({
                            id: row._id,
                        })
                    }}>
                        Delete
                    </Button>

                </Space>
            ),
        }
    ].filter(item => !item.hidden);
};