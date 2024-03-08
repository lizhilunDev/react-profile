import Section from '../../components/Section';
import Slider from '../../components/Slider';

const Work = () => {
  const content = <Slider></Slider>;

  return (
    <>
      <Section
        id='work'
        title={'Work Experience.'}
        content={content}
        description='업무로 진행된 프로젝트들에 대한 내용입니다.'
      />
    </>
  );
};

export default Work;
