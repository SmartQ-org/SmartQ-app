import React from 'react';

import './FirstInfo.scss'

import {ReactComponent as HeroImage} from '../../assets/destinations.svg';

const FirstInfo = () => {
  return (
  <div className='first-info-container'>
    <div className='text-container'>
      <h6 className='title'> Our Goal </h6>
      <h2 className='subtitle'> Keep Connected While Staying Safe
         </h2>
      <p className='paragraph'> As we progress into the new decade it is clear that the world is changing. Emphasis has been placed on increasing the efficiency 
      and safety of systems which have been in place for as long as we can remember. While some of these systems have updated with the times, the way in which we 
      maintain physical lines has gone unchanged, and with social distancing becoming ever-prevalent in our societies it is clear what we need to innovate on. 
      This is where SmartQ aims to solve the issue with innovative technology to reduce a businesses reliance on physical queues and transition to a virtual, more 
      modern form of waiting. At SmartQ we aim to assist communities by allowing them to stay connected while maintaining their safety and wellbeing.  </p>
    </div>
    <div className='img-container'>
      <HeroImage className='hero-img'/>
    </div>
  </div>
  
  )
};
  

export default FirstInfo;