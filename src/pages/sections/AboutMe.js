import React from 'react';
import Section from '../../components/Section/Section';
import { PAGE } from '../../constants/const';

const AboutMe = () => {
  const content = <div>여기는 내 소개</div>;
  return (
    <>
      <Section id={PAGE.ABOUT_ME} title='About Me.' content={content} />
    </>
  );
};

export default AboutMe;
