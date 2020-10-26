import React from 'react';

import './FifthInfo.scss'

import {ReactComponent as HeroImage} from '../../assets/queue.svg';

const FifthInfo = () => {
  return (
  <div className='fifth-info-container'>
    <div className='img-container'>
      <HeroImage className='hero-img'/>
    </div>
    <div className='text-container'>
      <h6 className='title'> Solution Explanation (2 of 2) </h6>
      <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h2>
      <p className='paragraph'> This part will go into detail about the priority queue and how it is processed before the regular queue to allow for people with special needs
      to be seen in at first. Comparing it to most traditional lines where both people of special needs and the elderly are made to lineup with everyone else. Which can be
      especially difficult to them depending on their situation.</p>
    </div>
  </div>
  
  )
};
  

export default FifthInfo;