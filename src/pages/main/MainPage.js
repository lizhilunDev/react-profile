import MainTitle from './MainTitle';
import MainWave from './MainWave';

const MainPage = () => {
  return (
    <>
      <section id='main' className='main-wrap'>
        <MainWave></MainWave>
        <MainTitle></MainTitle>
      </section>
    </>
  );
};

export default MainPage;
