import { Col, Row } from 'antd'
import React from 'react'

const db = [
    {
        nameMenu: 'Shop and Learn',
        specification: ['story', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']

    },
    {
        nameMenu: 'Services',
        specification: ['story', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']

    },
    {
        nameMenu: 'Apple Store',
        specification: ['story', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']

    },
    {
        nameMenu: 'For Business',
        specification: ['story', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']

    },
    {
        nameMenu: 'Apple Values',
        specification: ['story', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']

    },
]

function AppFooter() {
    return (
        <div className='footer'>
            <div className='text-footer'>
                <p>
                    1. Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial.
                    <br />
                    Plan automatically renews until cancelled. Terms apply.
                    <br />
                    A subscription is required for Apple Fitness+.
                    <br />
                    Apple Fitness+ requires an iPhone 8 or later with iOS 16.1.
                    <br />
                    Apple Fitness+ requires an Apple Watch Series 3 or later. Available when paired with iPhone 6s or later with iOS 14.3 or later.
                    <br />
                    Fitness app on Apple TV requires tvOS 14.3 or later.
                    <br />
                    Fitness app on iPad requires iPadOS 14.3 or later.
                    <br />
                    To get the newest features, make sure your devices are running the latest software version.
                </p>

                <hr className='footer-hr' />

                <div className='footer-menu'>
                    {db.map((info, index) => {
                        return (
                            <div key={index} className='menu-footer'>
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={6}>
                                        <div className='menu-content-f'>
                                            <h2><b>{info.nameMenu}</b></h2>
                                            <p>{info.specification.map((ids, index) => {
                                                return (
                                                    <div className='h4-footer' key={index}>
                                                        <h4>{ids}</h4>
                                                        <br />
                                                    </div>
                                                )
                                            })}</p>
                                        </div>

                                    </Col>

                                </Row>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default AppFooter