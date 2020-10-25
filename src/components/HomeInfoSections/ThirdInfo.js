import React from 'react';
import { useHistory } from 'react-router-dom';

import './ThirdInfo.scss'

const ThirdInfo = () => {

  const history = useHistory();

  return (
  <div className='third-info-container'>
    <div className='text-container'>
      <h2> Cut The Line and Save Some Time! </h2>
    </div>
    <a className='btn' onClick={() => history.push('/login')}>Try Now!</a>


  </div>
  )
};
  

export default ThirdInfo;