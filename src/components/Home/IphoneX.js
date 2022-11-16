import React from 'react'

import xr from '../../assets/images/xr.png'

import {
    RightOutlined
} from '@ant-design/icons';

function IphoneX() {
    return (
        <div>
            <div className='content-phon'>
                <h1>iPhone XR</h1>
                <h3>All-screen design. Longest battery life ever in an Iphone.<br /> Fastest performance. Studio-quality photos</h3>
                <div className='link'>
                    <h2><a href='/'>Learn More <RightOutlined style={{ fontSize: '15px' }} /></a></h2> &ensp; &ensp;
                    <h2><a href='/'>Buy<RightOutlined style={{ fontSize: '15px' }} /></a><RightOutlined /></h2>
                </div>
                <div className='img-content'>
                    <img src={xr} />
                </div>
            </div>
        </div>
    )
}

export default IphoneX