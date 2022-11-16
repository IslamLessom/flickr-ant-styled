import React from 'react'

import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

import {
    ShoppingOutlined,
    SearchOutlined
} from '@ant-design/icons';

import logo from '../../assets/images/logo.png'


const menu = ['Home', 'Iphone', 'IPad', 'TV', 'Watch', 'FAQ', 'About']

function AppHeader() {
    return (
        <div className='container'>
            <div className='header-content'>
                <Row >
                    <Col span={4}>
                        <div className='logo'>
                            <img src={logo} />
                        </div>
                    </Col>
                    <Col span={17}>
                        <div className='menu'>
                            <div className='menu-ul'>
                                <ul>
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><NavLink to='/iphone'>Iphone</NavLink></li>
                                    <li><NavLink to='/ipad'>IPad</NavLink></li>
                                    <li><NavLink to='/tv'>TV</NavLink></li>
                                    <li><NavLink to='/watch'>Watch</NavLink></li>
                                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                                    <li><NavLink to='/about'>About</NavLink></li>
                                </ul>
                            </div>

                        </div></Col>
                    <Col span={3}>
                        <div className='icons-menu'>
                            <Row>
                                <Col span={12}><SearchOutlined style={{ fontSize: '20px' }} /></Col>
                                <Col span={12}><ShoppingOutlined style={{ fontSize: '20px' }} /></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>



            </div>

        </div>
    )
}

export default AppHeader