import MainPage from './main/MainPage';
import Cursor from '../components/Cursor';
import Links from './section/Links';
import Skills from './section/Skills';
import Projects from './section/Projects';
import End from './end/End';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });

  return (
    <>
      <MainPage />
      <Skills />
      <Projects />
      <Links />
      <End />

      <Cursor></Cursor>
    </>
  );
};

export default Page;
