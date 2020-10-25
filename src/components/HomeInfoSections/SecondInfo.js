import React from 'react';

import './SecondInfo.scss'

import {ReactComponent as HeroImage} from '../../assets/wheelchair.svg';

const SecondInfo = () => {
  return (
  <div className='second-info-container'>
    <div className='img-container'>
      <HeroImage className='hero-img'/>
    </div>
    <div className='text-container'>
      <h6 className='title'> Talk About Disabled Priority Queue (Value Proposition 2 of 2) </h6>
      <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h2>
      <p className='paragraph'> Something about how traditional linups are not all made the same. With some repsecting the disabled and elderly with priority and others
      treating them as just another person in line. This can be troublesome to those with more severe disabilities or when in the presence of dangerous circumstances like
      extreme cold, rain, etc. That is why SmartQ implements a universal priority system in every line providing extra safety and piece of mind to those who need it the most.</p>
    </div>
  </div>
  
  )
};
  

export default SecondInfo;