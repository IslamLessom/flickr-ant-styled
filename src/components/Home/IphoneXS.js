import React from 'react'

import xs from '../../assets/images/XS.png'

import {
    RightOutlined
} from '@ant-design/icons';

function IphoneX() {
    return (
        <div>
            <div className='content-phon'>
                <h1>iPhone XS</h1>
                <h3>All-screen design. Longest battery life ever in an Iphone.<br /> Fastest performance. Studio-quality photos</h3>
                <div className='link'>
                    <h2><a href='/'>Learn More <RightOutlined style={{ fontSize: '15px' }} /></a></h2> &ensp; &ensp;
                    <h2><a href='/'>Buy<RightOutlined style={{ fontSize: '15px' }} /></a><RightOutlined /></h2>
                </div>
                <div className='img-content-xs'>
                    <img src={xs} />
                </div>
            </div>
        </div>
    )
}

export default IphoneX