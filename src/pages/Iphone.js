import { Col, Row } from 'antd'
import React from 'react'

import {
  RightOutlined
} from '@ant-design/icons';


const db = [
  {

    "title": "Apple Watch",
    "price": "599$",
    "detail": "To make the best use of its size and location on your wrist, Apple Watch has all-new interactions and technologies. They let you do familiar things more quickly and conveniently. As well as some things that simply weren’t possible before. So using it is a whole new experience. One that’s more personal than ever.",
    "thumbnailImage": "watch-thumb.jpg",
    "fullImage": "https://help.apple.com/assets/62472AFA81F95572E4151301/62506844FA21503BA0341A19/ru_RU/5312c4b87bb3b59b89d1d1234be434ba.png"
  },
  {
    "title": "iPhone 6",
    "price": "1000$",
    "detail": "iPhone 6 isn’t simply bigger — it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
    "thumbnailImage": "iphone-6-thumb.jpg",
    "fullImage": "https://gsm10.ru/upload_optimized/iblock/f4b/f4bc33f9341e086f06e141a0ec078e37.png"
  },
  {
    "title": "Apple TV",
    "price": "250$",
    "detail": "Apple TV is a digital media player and a microconsole developed and sold by Apple Inc. It is a small network appliance and entertainment device that can receive digital data from a number of sources and stream it to capable TV for playing on the TV screen.",
    "thumbnailImage": "tv-thumb.jpg",
    "fullImage": "https://1click.ru/upload/resized/500/500/75/upload/iblock/edc/xedcfe841bd8b04fd0e3197d205cdc638.png,q1638603845.pagespeed.ic.O_mPq6Jc-t.png"
  },
  {
    "title": "Macbook pro",
    "price": "2000$",
    "detail": "The MacBook Pro (sometimes abbreviated MBP[1]) is a line of Macintosh portable computers introduced in January 2006 by Apple Inc., and now in its third generation. Replacing the PowerBook G4, the MacBook Pro was the second model, after the iMac, to be announced in the Apple–Intel transition. It is also the high-end model of the MacBook family and is currently produced with 13- and 15-inch screens, while a 17-inch version was also available in the past.",
    "thumbnailImage": "macbook-pro-thumb.jpg",
    "fullImage": "https://store123.ru/upload/rbs.moyskladstocks/files/102ad48f-c465-4ce5-aa50-5c6d783abdf0/fb9c20ac3eb07b4035fcb810730314f0/997/9971f6436e9b00b47cbc83abfcccaeed.png"
  },
  {
    "title": "Macbook Air",
    "price": "1200$",
    "detail": "The MacBook Air is a line of Macintosh ultraportable notebook computers from Apple Inc. The Air was designed to balance both performance and portability, consisting of a full-sized keyboard design, a machined casing made of aluminum, and a very light and thin structure. The MacBook Air is available in two sizes, with the length of the diagonal display determining the model size: 13.3-inch and 11.6-inch (or 33.78 cm and 29.46 cm, respectively). A range of model choices with different specifications are produced by Apple, and as of 2011, all Air models use solid-state drive (SSD) storage and Intel Core i5 or i7 central processing units (CPUs).",
    "thumbnailImage": "macbook-air-thumb.jpg",
    "fullImage": "https://istudio-shop.ru/a/istudio/files/multifile/2353/izobrazhenie_2021_11_22_123456.png"
  },
  {
    "title": "iMac",
    "price": "3000$",
    "detail": "The iMac is a range of all-in-one Macintosh desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998 (shipped; introduced June 1998), and has evolved through six distinct forms.In its original form, the iMac G3 had a gumdrop or egg-shaped look, with a CRT monitor, mainly enclosed by a colored, translucent plastic case, which was refreshed early on with a sleeker design notable for its slot-loaded optical drive. The second major revision, the iMac G4, moved the design to a hemispherical base containing all the main components and an LCD monitor on a freely moving arm attached to it. The third and fourth major revisions, the iMac G5 and the Intel iMac respectively, placed all the components immediately behind the display, creating a slim unified design that tilts only up and down on a simple metal base. The fifth major revision shared the same form as the previous model, but was thinner and used anodized aluminum and a glass panel over the entire front.",
    "thumbnailImage": "imac-thumb.jpg",
    "fullImage": "https://remont-marino.ru/upload/iblock/8ad/imac-27-min.png"
  },

]


function Iphone() {
  return (
    <div className='iphone-content'>
      <Row>
        {
          db.map((info, index) => {
            return (
              <div key={index} className='product-apple-ip'>
                <Col span={12}>
                  <div className='card-conteiner'>
                    <img src={info.fullImage} />
                    <h1>{info.title}</h1>
                    <h2>{info.price}</h2>
                    <p>{info.detail}</p>
                    <div className='link-ip'>
                      <h3><a href='/'>Buy now <RightOutlined style={{ fontSize: '15px' }} /></a></h3> &ensp; &ensp;
                      <h3><a href='/'>Find a store<RightOutlined style={{ fontSize: '15px' }} /></a></h3>
                    </div>
                  </div>
                </Col>
              </div>

            )
          })
        }

      </Row>
    </div>
  )
}

export default Iphone