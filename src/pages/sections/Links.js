import React from 'react';
import Section from '../../components/Section/Section';
import MovingCard from '../../components/MovingCard/MovingCard';
import { PAGE } from '../../constants/const';

const Links = () => {
  return (
    <>
      <Section
        id={PAGE.LINKS}
        title={'Links.'}
        content={<MovingCard />}
        description='텍스트를 클릭하면 해당 링크로 이동합니다.'
        className='no-border'
      />
    </>
  );
};

export default Links;
