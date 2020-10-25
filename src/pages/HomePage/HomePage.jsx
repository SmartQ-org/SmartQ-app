import React from 'react';

import FirstInfo  from '../../components/HomeInfoSections/FirstInfo'
import SecondInfo from '../../components/HomeInfoSections/SecondInfo';
import ThirdInfo from '../../components/HomeInfoSections/ThirdInfo';
import FourthInfo from '../../components/HomeInfoSections/FourthInfo'
import FifthInfo from '../../components/HomeInfoSections/FifthInfo';

export default function HomePage() {
  return (
    <div>
      <FirstInfo/>
      <SecondInfo/>
      <ThirdInfo/>
      <FourthInfo/>
      <FifthInfo/>
    </div>
  )
};
