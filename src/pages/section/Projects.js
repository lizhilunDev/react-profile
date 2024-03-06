import Section from '../../components/Section';
import Slider from '../../components/Slider';

const Projects = () => {
  const content = <Slider></Slider>;

  return (
    <>
      <Section title={'Projects.'} content={content} noBorder={true}></Section>
    </>
  );
};

export default Projects;
