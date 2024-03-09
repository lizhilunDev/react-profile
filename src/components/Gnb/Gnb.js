import React, { useEffect, useState } from 'react';
import './Gnb.scss';
import { PAGE } from '../../constants/const';

const Gnb = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) return;

      const sections = [
        PAGE.MAIN,
        PAGE.ABOUT_ME,
        PAGE.SKILLS,
        PAGE.WORK_EXPERIENCE,
        PAGE.PROJECTS,
        PAGE.LINKS,
      ];

      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);

        if (el) {
          const scrollPosition = window.scrollY + window.innerHeight / 3;
          const elementTop = el.offsetTop;
          const elementHeight = el.offsetHeight;

          return (
            scrollPosition >= elementTop &&
            scrollPosition <= elementTop + elementHeight
          );
        }

        return false;
      });

      if (currentSection) {
        setActiveMenu(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavigating]);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();

    setIsNavigating(true);
    setActiveMenu(targetId);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      setIsNavigating(false);
    }, 600);
  };

  return (
    <nav className='gnb'>
      <ul>
        <li>
          <a
            href={`#${PAGE.MAIN}`}
            onClick={(e) => handleNavigation(e, PAGE.MAIN)}
            className={activeMenu === PAGE.MAIN ? 'active' : ''}
          >
            Main
          </a>
        </li>
        <li>
          <a
            href={`#${PAGE.ABOUT_ME}`}
            onClick={(e) => handleNavigation(e, PAGE.ABOUT_ME)}
            className={activeMenu === PAGE.ABOUT_ME ? 'active' : ''}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href={`#${PAGE.SKILLS}`}
            onClick={(e) => handleNavigation(e, PAGE.SKILLS)}
            className={activeMenu === PAGE.SKILLS ? 'active' : ''}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href={`#${PAGE.WORK_EXPERIENCE}`}
            onClick={(e) => handleNavigation(e, PAGE.WORK_EXPERIENCE)}
            className={activeMenu === PAGE.WORK_EXPERIENCE ? 'active' : ''}
          >
            Work Experience
          </a>
        </li>
        <li>
          <a
            href={`#${PAGE.PROJECTS}`}
            onClick={(e) => handleNavigation(e, PAGE.PROJECTS)}
            className={activeMenu === PAGE.PROJECTS ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href={`#${PAGE.LINKS}`}
            onClick={(e) => handleNavigation(e, PAGE.LINKS)}
            className={activeMenu === PAGE.LINKS ? 'active' : ''}
          >
            Links
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
