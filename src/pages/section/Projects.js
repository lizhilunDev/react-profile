import Section from '../../components/Section';
import Slider from '../../components/Slider';

const Projects = () => {
  const content = <Slider></Slider>;

  return (
    <>
      <Section
        id='work'
        title={'Work Experience.'}
        content={content}
        description=''
      />
    </>
  );
};

export default Projects;
