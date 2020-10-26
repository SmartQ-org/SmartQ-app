import React from 'react';

import './FourthInfo.scss'

import {ReactComponent as HeroImage} from '../../assets/phone.svg';

const FourthInfo = () => {
  return (
  <div className='fourth-info-container'>
    <div className='text-container'>
      <h6 className='title'> Virtual Queuing Done Right </h6>
      <h2> Eliminate The Hassle Of Maintaining A Physical Line </h2>
      <p className='paragraph'> SmartQ utilizes innovative technology to allow you to join a virtual line created by the businesses you wish to support. 
        Upon joining you will be provided status updates on your position in line to allow for an accurate sense of your place in line. 
        When you reach the front of the line you are notified and sent a code in which you may scan at the entrance of the business you wish to enter. 
        It is as simple as Queue, Scan and Enter. </p>
    </div>
    <div className='img-container'>
      <HeroImage className='hero-img'/>
    </div>
  </div>
  
  )
};
  

export default FourthInfo;