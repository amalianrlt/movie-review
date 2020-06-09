import React from 'react';
import 'antd/dist/antd.css';
import '../style/scss/HomePage.scss';
import { Carousel } from 'antd';
import PeakyBlinders from '../style/images/peakyb.jpg';
import StrangerThings from '../style/images/strangert.jpg';

export default function CarouselPage() {
    return (
  <Carousel autoplay>
    <div>
      <img style={{width:"90%"}}src={PeakyBlinders} alt="PeakyBlinders"/>
    </div>
    <div>
    <img src={PeakyBlinders} alt="PeakyBlinders"/>
    </div>
    <div>
    <img src={StrangerThings} alt="PeakyBlinders"/>
    </div>
    <div>
    <img src={PeakyBlinders} alt="PeakyBlinders"/>
    </div>
  </Carousel>
)
    }