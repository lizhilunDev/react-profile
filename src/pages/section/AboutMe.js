import Section from '../../components/Section';
import MovingCard from '../../components/MovingCard';

const AboutMe = () => {
  return (
    <>
      <Section
        title={'About Me.'}
        content={<MovingCard />}
        description='카드 위에서 마우스를 움직여보세요!'
      />
    </>
  );
};

export default AboutMe;
