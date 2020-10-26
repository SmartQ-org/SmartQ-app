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
      <h6 className='title'> An Equal Oppertunity System </h6>
      <h2> Allow Those Who Need To Be Heard And Seen </h2>
      <p className='paragraph'> SmartQ wishes to standardize a universal priority queue by providing it to all businesses when creating their virtual queue.
      With priority queuing, a user can indicate that they are of priority needs and after confirmation of those needs will be placed into a seperate queue.
      This queue is processed first, with the standard queue being processed after we have made sure we have provided swift service to those who require it.  </p>
    </div>
  </div>
  
  )
};
  

export default FifthInfo;