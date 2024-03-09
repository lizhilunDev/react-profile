import React from 'react';
import Section from '../../components/Section/Section';
import Slider from '../../components/Slider/Slider';
import { PAGE } from '../../constants/const';

const Work = () => {
  const content = <Slider></Slider>;

  return (
    <>
      <Section
        id={PAGE.WORK_EXPERIENCE}
        title={'Work Experience.'}
        content={content}
        description='업무로 진행된 프로젝트들에 대한 내용입니다.'
      />
    </>
  );
};

export default Work;
