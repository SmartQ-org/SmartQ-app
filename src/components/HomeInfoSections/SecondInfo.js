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
      <h6 className='title'> Priority Queue System </h6>
      <h2> Bringing Universal Priority To Those Who Need It The Most. </h2>
      <p className='paragraph'> Traditional lineups have been around for forever, yet have had little to no change. As our society pushes for accessability and inclusiveness
      we've left behind those who need it the most. While only a few businesses employ a form of priority line within their business, SmartQ aims to standardize this
      nessesity. Introducing a universal high-priority queue will allow those who need, to be seen and heard when they need.</p>
    </div>
  </div>
  
  )
};
  

export default SecondInfo;