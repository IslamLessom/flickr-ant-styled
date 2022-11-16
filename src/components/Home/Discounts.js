import React from 'react'

import { Col, Row, Button } from 'antd';

import {
    RightOutlined
} from '@ant-design/icons';

const db = [
    {
        "name": "Apple Watch",
        "price": "599$",
        "detail": "To make the best use of its size and location on your wrist, Apple Watch has all-new interactions and technologies. They let you do familiar things more quickly and conveniently. As well as some things that simply weren’t possible before. So using it is a whole new experience. One that’s more personal than ever.",
        'description': 'To make the best use of its size and location on your wrist, Apple Watch has all-new interactions and technologies. They let you do familiar things more quickly and conveniently.'
    },
]

function Discounts() {
    return (
        <div className='discounts'>
            <Row>
                <div className='name-discounts'>
                    <Col span={24}>
                        {db.map((info, index) => {
                            return (
                                <div key={index} className='description'>
                                    <Button ghost>Limited</Button>
                                    <h1>  {info.name}  {info.price + '.'}  </h1>
                                    <h3>{info.description}</h3>
                                    <div className='link dis-link'>
                                        <h2><a href='/'>Buy now <RightOutlined style={{fontSize: '15px'}}/></a></h2> &ensp; &ensp;
                                        <h2><a href='/'>Find a store<RightOutlined style={{fontSize: '15px'}} /></a><RightOutlined /></h2>
                                    </div>
                                </div>
                            )
                        })}
                    </Col>
                </div>
            </Row>
        </div>
    )
}

export default Discounts


