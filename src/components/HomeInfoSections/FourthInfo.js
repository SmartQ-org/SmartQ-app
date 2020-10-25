import React from 'react';

import './FourthInfo.scss'

import {ReactComponent as HeroImage} from '../../assets/phone.svg';

const FourthInfo = () => {
  return (
  <div className='fourth-info-container'>
    <div className='text-container'>
      <h6 className='title'> Solution Explanation (1 of 2) </h6>
      <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         </h2>
      <p className='paragraph'> Something about how all you have to do is logon with an account and you may search for and join into a virtual lineup which
      is managed by each business invidiually. After joining the line you will be given a queue number to display your position in the line. Upon nearly reaching the front of 
      the user is notified to be ready to enter the business. When the user reaches the front of the line, they are once again notified and provided a QR code, this code is scanned
      by the business to confirm the customers identity and allow them into the store. </p>
    </div>
    <div className='img-container'>
      <HeroImage className='hero-img'/>
    </div>
  </div>
  
  )
};
  

export default FourthInfo;