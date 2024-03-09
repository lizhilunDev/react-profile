import React from 'react';
import Section from '../../components/Section/Section';
import { PAGE } from '../../constants/const';

const Projects = () => {
  const content = <span>여기에 개인 프로젝트 추가 ....</span>;
  return (
    <>
      <Section
        id={PAGE.PROJECTS}
        title='Projects.'
        content={content}
        description='업무 외의 사이드 프로젝트들에 대한 내용입니다.'
      />
    </>
  );
};

export default Projects;
