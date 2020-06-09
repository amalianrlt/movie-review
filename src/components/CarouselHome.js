import React from 'react';
import 'antd/dist/antd.css';
import '../style/scss/HomePage.scss';
import { Carousel } from 'antd';
import PeakyBlinders from '../style/images/peaky.jpg';
import StrangerThings from '../style/images/stranger1.png';

export default function CarouselPage() {
    return (
  <Carousel autoplay>
    <div>
      <img style={{width:"100%", width:"100%"}}src={PeakyBlinders} alt="PeakyBlinders"/>
    </div>
    <div>
    <img style={{width:"100%", width:"100%"}}src={PeakyBlinders} alt="PeakyBlinders"/>
    </div>
    <div>
    <img style={{width:"100%", width:"100%"}}src={PeakyBlinders} alt="PeakyBlinders"/>
    </div>
    <div>
    <img style={{width:"100%", width:"100%"}}src={PeakyBlinders} alt="PeakyBlinders"/>
    </div>
  </Carousel>
)
    }