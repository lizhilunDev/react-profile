import React, { useEffect } from 'react';
import MainPage from './main/MainPage';
import Cursor from '../components/Cursor/Cursor';
import Links from './sections/Links';
import Skills from './sections/Skills';
import Work from './sections/Work';
import End from './end/End';
import Projects from './sections/Projects';
import AboutMe from './sections/AboutMe';

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
