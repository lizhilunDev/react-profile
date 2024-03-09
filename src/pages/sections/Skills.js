import React from 'react';
import Section from '../../components/Section/Section';
import SkillContainer from '../../components/SkillContainer/SkillContainer';
import htmlImg from '../../assets/images/skills_html5.png';
import cssImg from '../../assets/images/skills_css3.png';
import scssImg from '../../assets/images/skills_css3.png';
import reactImg from '../../assets/images/skills_reactjs.png';
import gitImg from '../../assets/images/skills_git.png';
import figmaImg from '../../assets/images/skills_figma.png';
import swaggerImg from '../../assets/images/skills_swagger.png';
import springImg from '../../assets/images/skills_spring.png';
import storybookImg from '../../assets/images/skills_storybook.png';
import jsImg from '../../assets/images/skills_js.png';
import oracleImg from '../../assets/images/skills_oracle.png';
import vueImg from '../../assets/images/skills_vue.png';
import cypressImg from '../../assets/images/skills_cypress.png';
import { PAGE } from '../../constants/const';

const Skills = () => {
  const frontSkills = [
    {
      imgSrc: htmlImg,
      imgAlt: 'HTML5',
      title: 'HTML5',
      description:
        '웹 접근성, 표준성을 준수하며 시멘틱 태그를 이용해 마크업 할 수 있습니다.',
    },
    {
      imgSrc: cssImg,
      imgAlt: 'CSS3',
      title: 'CSS3',
      description:
        'display, grid 를 사용하여 원하는 화면을 구현할 수 있습니다.',
    },
    {
      imgSrc: scssImg,
      imgAlt: 'SCSS',
      title: 'SCSS',
      description:
        'SCSS 문법과 네스팅을 활용하여 유지보수에 용이한 코드를 작성할 수 있습니다.',
    },
    {
      imgSrc: reactImg,
      imgAlt: 'React.js',
      title: 'React.js',
      description:
        'React.js 구조와 다양한 hook 을 알고, 재사용 가능한 컴포넌트를 설계할 수 있습니다.',
    },
    {
      imgSrc: vueImg,
      imgAlt: 'Vue3',
      title: 'Vue3',
      description:
        'Vue3 컴포지션 API 의 다양한 hook 을 알고, 재사용 가능한 컴포넌트를 설계할 수 있습니다.',
    },
    {
      imgSrc: jsImg,
      imgAlt: 'JavaScript',
      title: 'JavaScript',
      description:
        'JavaScript 의 내장 함수, 비동기 처리, DOM 접근 등을 사용할 수 있습니다.',
    },
    {
      imgSrc: figmaImg,
      imgAlt: 'Figma',
      title: 'Figma',
      description: 'Figma UI/UX 시안을 토대로 개발을 수행할 수 있습니다.',
    },
    {
      imgSrc: storybookImg,
      imgAlt: 'Storybook',
      title: 'Storybook',
      description:
        'Storybook 으로 디자인 시스템 컴포넌트를 관리하고 문서화할 수 있습니다.',
    },
    {
      imgSrc: cypressImg,
      imgAlt: 'Cypress',
      title: 'Cypress',
      description: 'Cypress 를 이용하여 컴포넌트 테스트를 할 수 있습니다.',
    },
  ];

  const backendSkills = [
    {
      imgSrc: swaggerImg,
      imgAlt: 'Swagger',
      title: 'Swagger',
      description: 'Swagger 로 REST API 를 테스트할 수 있습니다.',
    },
    {
      imgSrc: springImg,
      imgAlt: 'SpringBoot',
      title: 'Spring Boot',
      description: 'Java, Spring Boot, JPA 로 REST API 을 개발할 수 있습니다.',
    },
    {
      imgSrc: oracleImg,
      imgAlt: 'Oracle',
      title: 'Oracle',
      description: '쿼리를 작성하여 원하는 결과를 얻어낼 수 있습니다.',
    },
  ];

  const etc = [
    {
      imgSrc: gitImg,
      imgAlt: 'Git',
      title: 'Git',
      description:
        'commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리를 관리할 수 있습니다.',
    },
  ];

  const skills = [...frontSkills, ...backendSkills, ...etc];

  const content = <SkillContainer skills={skills} />;

  return (
    <>
      <Section
        id={PAGE.SKILLS}
        title={'Skills.'}
        content={content}
        description='박스에 마우스를 올려보세요!'
      />
    </>
  );
};

export default Skills;
