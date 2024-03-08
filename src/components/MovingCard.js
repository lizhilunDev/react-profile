import '../styles/components/MovingCard.css';

import React, { useEffect, useRef } from 'react';
import resumeImage from '../assets/images/resume.png';
import emailImage from '../assets/images/email.png';
import git from '../assets/images/git.png';

const MovingCard = () => {
  const cardsRef = useRef(null);
  const imagesRef = useRef([]);
  const backgroundsRef = useRef([]);
  const range = 40;

  const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { x, y } = event;

      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      if (cardsRef.current) {
        cardsRef.current.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
      }

      imagesRef.current.forEach((image) => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      backgroundsRef.current.forEach((background) => {
        background.style.backgroundPosition = `${xValue * 0.45}px ${
          -yValue * 0.45
        }px`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const addImageRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  const addBackgroundRef = (el) => {
    if (el && !backgroundsRef.current.includes(el)) {
      backgroundsRef.current.push(el);
    }
  };

  return (
    <>
      <div className='card-wrap' ref={cardsRef}>
        <h3>name.</h3>
        <h2>이지윤</h2>

        <div className='card card-one'>
          <div className='card-bg' ref={addBackgroundRef}></div>
          <img
            className='card-img'
            alt='resume'
            src={resumeImage}
            ref={addImageRef}
          />
          <div className='card-text'>
            <p className='card-title'>이력서/경력기술서</p>
          </div>
        </div>

        <div className='card card-two'>
          <div className='card-bg' ref={addBackgroundRef}></div>
          <img
            className='card-img'
            alt='email'
            src={emailImage}
            ref={addImageRef}
          />
          <div className='card-text'>
            <a
              href='mailto:im.lizhilun@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <p className='card-title'>이메일</p>
            </a>
          </div>
        </div>

        <div className='card card-three'>
          <div className='card-bg' ref={addBackgroundRef}></div>
          <img className='card-img' alt='git' src={git} ref={addImageRef} />
          <div className='card-text'>
            <a
              href='https://github.com/lizhilunDev'
              target='_blank'
              rel='noreferrer'
            >
              <p className='card-title'>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovingCard;
