import MainPage from './main/MainPage';
import Cursor from '../components/Cursor';
import Arrow from '../components/Arrow';
import { useEffect, useRef, useState } from 'react';
import AboutMe from './section/AboutMe';
import Skills from './section/Skills';
import Projects from './section/Projects';
import End from './end/End';

const Page = () => {
  const sectionsRef = useRef([]);
  const [upArrow, setUpArrow] = useState(false);

  const handleClick = () => {
    const sections = sectionsRef.current;

    const currentIndex = sections.findIndex((section) => {
      const { top } = section.getBoundingClientRect();
      return top >= 0;
    });

    if (upArrow) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      const nextIndex = currentIndex + 1;
      if (nextIndex < sections.length) {
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const finalSection = document.querySelector('.final-section');
      const { top, bottom } = finalSection.getBoundingClientRect();

      if (top < window.innerHeight - 500 && bottom > 0) setUpArrow(true);
      else setUpArrow(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={addSectionRef}>
        <MainPage />
      </div>
      <div ref={addSectionRef}>
        <AboutMe />
      </div>
      <div ref={addSectionRef}>
        <Skills />
      </div>
      <div ref={addSectionRef}>
        <Projects />
      </div>
      <div ref={addSectionRef}>
        <End />
      </div>

      <Cursor></Cursor>
      <Arrow up={upArrow} onClick={handleClick}></Arrow>
    </>
  );
};

export default Page;
