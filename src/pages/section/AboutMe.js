import Section from '../../components/Section';

const AboutMe = () => {
  const content = <div>여기는 내 소개</div>;
  return (
    <>
      <Section id='about' title='About Me.' content={content} />
    </>
  );
};

export default AboutMe;
