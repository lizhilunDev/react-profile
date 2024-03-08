import { useEffect, useState } from 'react';
import '../styles/components/Gnb.css';

const Gnb = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) return;
      const sections = ['main', 'about', 'skills', 'work'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const scrollPosition = window.scrollY + window.innerHeight / 3;
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
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
            href='#main'
            onClick={(e) => handleNavigation(e, 'main')}
            className={activeMenu === 'main' ? 'active' : ''}
          >
            {' '}
            Main
          </a>
        </li>
        <li>
          <a
            href='#abut'
            onClick={(e) => handleNavigation(e, 'about')}
            className={activeMenu === 'about' ? 'active' : ''}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href='#skills'
            onClick={(e) => handleNavigation(e, 'skills')}
            className={activeMenu === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href='#work'
            onClick={(e) => handleNavigation(e, 'work')}
            className={activeMenu === 'work' ? 'active' : ''}
          >
            Work Experience
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
