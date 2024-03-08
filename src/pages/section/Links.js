import Section from '../../components/Section';
import MovingCard from '../../components/MovingCard';

const Links = () => {
  return (
    <>
      <Section
        id='links'
        title={'Links.'}
        content={<MovingCard />}
        description='텍스트를 클릭하면 해당 링크로 이동합니다.'
        className='no-border'
      />
    </>
  );
};

export default Links;
