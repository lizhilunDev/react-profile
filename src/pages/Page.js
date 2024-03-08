import { useEffect } from 'react';
import MainPage from './main/MainPage';
import Cursor from '../components/Cursor';
import Links from './section/Links';
import Skills from './section/Skills';
import Work from './section/Work';
import End from './end/End';
import Projects from './section/Projects';
import AboutMe from './section/AboutMe';

const Page = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });

  return (
    <>
      <MainPage />
      <AboutMe />
      <Skills />
      <Work />
      <Projects />
      <Links />
      <End />

      <Cursor></Cursor>
    </>
  );
};

export default Page;
