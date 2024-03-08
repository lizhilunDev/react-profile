import Section from '../../components/Section';
import SkillContainer from '../../components/SkillContainer';
import htmlImg from '../../assets/skills/html5.png';
import cssImg from '../../assets/skills/css3.png';
import scssImg from '../../assets/skills/sass.png';
import reactImg from '../../assets/skills/reactjs.png';
import gitImg from '../../assets/skills/git.png';
import figmaImg from '../../assets/skills/figma.png';
import swaggerImg from '../../assets/skills/swagger.png';
import springImg from '../../assets/skills/spring.png';
import storybookImg from '../../assets/skills/storybook.png';
import jsImg from '../../assets/skills/js.png';
import oracleImg from '../../assets/skills/oracle.png';
import vueImg from '../../assets/skills/vue.png';
import cypressImg from '../../assets/skills/cypress.png';

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
        id='skills'
        title={'Skills.'}
        content={content}
        description='박스에 마우스를 올려보세요!'
      />
    </>
  );
};

export default Skills;
