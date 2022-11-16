import React from 'react'

import mac from '../../assets/images/mac-air.png'

import {
    RightOutlined
} from '@ant-design/icons';
import { Row, Col } from 'antd';

import watch1 from '../../assets/images/watch1.png'
import watch2 from '../../assets/images/watch2.png'
import ipad from '../../assets/images/ipad.png'

const db = [
    {
        "name": "Watch",
        'series': "SERIES 4",
        "price": "599$",
        "detail": "All new. For a better you",
        'images': watch1
    },
    {
        "name": "ECG on your wrist",
        "price": "599$",
        "detail": "It`s Heart Month. Learn about your heart with Apple Watch",
        'images': watch2
    },
    {
        "name": "iPad Air 2",
        "price": "1200$",
        "detail": "To create the astonishingly thin silhouette of iPad Air 2",
        'images': ipad
    },
    {
        "name": "Watch",
        "price": "599$",
        "detail": "All new. For a better you",
        'images': watch1
    },
    {
        "name": "ECG on your wrist",
        "price": "599$",
        "detail": "It`s Heart Month. Learn about your heart with Apple Watch",
        'images': watch2
    },
    {
        "name": "iPad Air 2",
        "price": "1200$",
        "detail": "To create the astonishingly thin silhouette of iPad Air 2",
        'images': ipad
    }
]

function Macbook() {
    return (
        <div className='content-all-product'>
            <div className='mac-content'>
                <h1>MacBook Air</h1>
                <h3>Lightness strikes again</h3>
                <div className='link'>
                    <h2><a href='/'>Buy now <RightOutlined style={{ fontSize: '15px' }} /></a></h2> &ensp; &ensp;
                    <h2><a href='/'>Find a store<RightOutlined style={{ fontSize: '15px' }} /></a></h2>
                </div>
                <div className='images-mac'>
                    <img src={mac} />
                </div>
            </div>
            <div className='six-product'>
                <Row>
                    {
                        db.map((info, index) => {
                            return (
                                <div key={index} className='product-apple'>
                                    <Col span={12}>
                                        <h1>{info.name}</h1>
                                        <h2>{info.series}</h2>
                                        <p>{info.detail}</p>
                                        <div className='link'>
                                            <h3><a href='/'>Buy now <RightOutlined style={{ fontSize: '15px' }} /></a></h3> &ensp; &ensp;
                                            <h3><a href='/'>Find a store<RightOutlined style={{ fontSize: '15px' }} /></a></h3>
                                        </div>
                                        <div className='images-product'>
                                            <img src={info.images} />
                                        </div>
                                    </Col>
                                </div>

                            )
                        })
                    }
                </Row>
            </div>

        </div>
    )
}

export default Macbook