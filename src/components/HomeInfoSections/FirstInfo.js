import React from 'react';

import './FirstInfo.scss'

import {ReactComponent as HeroImage} from '../../assets/destinations.svg';

const FirstInfo = () => {
  return (
  <div className='first-info-container'>
    <div className='text-container'>
      <h6 className='title'> Our Goal (Value Proposition 1 of 2) </h6>
      <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         </h2>
      <p className='paragraph'> Something about how the world is chaning and with the increasing worry of safety and efficiency, the traditional physical lineup has not changed
      and thus has not addressed any issue which has become prevalent into the new decade. This is where SmartQ aims to solve the issue with inovative technology to reduce
      a busniesses reliance on physical lineups and instead rely on a virtual one to provide both the buisness and customers with a more modern form of waiting.</p>
    </div>
    <div className='img-container'>
      <HeroImage className='hero-img'/>
    </div>
  </div>
  
  )
};
  

export default FirstInfo;