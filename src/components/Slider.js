import '../styles/components/Slider.css';
import React, { useState, useEffect, useRef } from 'react';
import Slide from './Slide';

const Slider = () => {
  const SLIDE_WIDTH = 60;

  const [index, setIndex] = useState(0);
  const slidesRef = useRef(null);

  const first = {
    title: 'KudosWorks 2.0 admin',
    subTitles: ['2024.02 ~ 2024.03', '큐더스웍스 어드민 차세대 프로젝트'],
    descriptions: [
      {
        id: 'first_id_1',
        chipClass: 'fe',
        chipText: 'FE',
        contents: [
          '흩어져 있던 레거시 프로젝트들을 모노레포 구성으로 변경',
          '디자인 시스템을 기반으로 한 공통 컴포넌트 개발 및 유지 보수',
          'Storybook 을 이용한 컴포넌트 문서화 및 관리 도입',
          'Cypress 를 이용한 E2E 테스트 도입',
          'JWT 를 활용한 로그인 구현',
          '기타 서비스 UI 구현',
        ],
      },
      {
        id: 'first_id_2',
        chipClass: 'be',
        chipText: 'BE',
        contents: [
          'Google Authenticator 을 이용한 OTP 인증 구현',
          'REST API 형식의 CRUD 개발',
        ],
      },
      {
        id: 'first_id_3',
        chipClass: 'stack',
        chipText: 'STACK',
        contents: ['Vue3 / Spring Boot / JPA'],
      },
    ],
  };

  const second = {
    linkUrl: 'https://www.kudosworks.co.kr/',
    title: 'Kudos Works 2.0',
    subTitles: ['2023.10 ~ 2024.02', '큐더스웍스 차세대 프로젝트'],
    descriptions: [
      {
        id: 'second_id_1',
        chipClass: 'fe',
        chipText: 'FE',
        contents: [
          '디자인 시스템을 기반으로 한 공통 컴포넌트 개발 및 유지 보수',
          'WYSIWYG 에디터 커스텀 및 컴포넌트화',
          'vuepress 를 이용한 컴포넌트 문서화 및 release note 관리',
          '기타 서비스 UI 구현',
        ],
      },
      {
        id: 'second_id_2',
        chipClass: 'be',
        chipText: 'BE',
        contents: [
          '500,000 줄 이상의 엑셀 파일 (기업 주주명부) 파싱 후 DB INSERT',
          '기존 주주명부 INSERT 로직의 약 1/10 속도로 개선 (500,000 개 기준)',
          'REST API 형식의 CRUD 개발',
        ],
      },
      {
        id: 'second_id_3',
        chipClass: 'stack',
        chipText: 'STACK',
        contents: ['Vue3 / Spring Boot / JPA'],
      },
    ],
  };

  const shiftSlide = (direction) => {
    let newIndex = index + direction;

    if (newIndex < 0) newIndex = 4;
    else if (newIndex >= 5) newIndex = 0;

    setIndex(newIndex);
  };

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.left = `-${index * SLIDE_WIDTH}vw`;
    }
  }, [index]);

  return (
    <div className='slider'>
      <div className='slide-container'>
        <div className='slide-wrapper' ref={slidesRef}>
          <Slide
            title={first.title}
            subTitles={first.subTitles}
            chip={first.chip}
            descriptions={first.descriptions}
          />
          <Slide
            linkUrl={second.linkUrl}
            title={second.title}
            subTitles={second.subTitles}
            chip={second.chip}
            descriptions={second.descriptions}
          />
          <div className='slide'>Slide 2</div>
          <div className='slide'>Slide 3</div>
          <div className='slide'>Slide 4</div>
          <div className='slide'>Slide 5</div>
        </div>
      </div>
      <button className='btn prev' onClick={() => shiftSlide(-1)}></button>
      <button className='btn next' onClick={() => shiftSlide(1)}></button>
    </div>
  );
};

export default Slider;
