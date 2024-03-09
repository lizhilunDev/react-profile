import React from 'react';
import { PAGE } from '../../constants/const';
import MainTitle from '../../components/MainTitle/MainTitle';
import MainWave from '../../components/MainWave/MainWave';

const MainPage = () => {
  return (
    <>
      <section id={PAGE.MAIN} className='main-wrap'>
        <MainWave></MainWave>
        <MainTitle></MainTitle>
      </section>
    </>
  );
};

export default MainPage;
