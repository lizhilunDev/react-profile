import MainPage from './main/MainPage';
import Cursor from '../components/Cursor';
import AboutMe from './section/AboutMe';
import Skills from './section/Skills';
import Projects from './section/Projects';
import End from './end/End';

const Page = () => {
  return (
    <>
      <MainPage />
      <AboutMe />
      <Skills />
      <Projects />
      <End />

      <Cursor></Cursor>
    </>
  );
};

export default Page;
