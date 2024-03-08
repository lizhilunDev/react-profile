import '../styles/components/Slider.css';
import React, { useState, useEffect, useRef } from 'react';
import Slide from './Slide';

const Slider = () => {
  const SLIDE_WIDTH = 1020;

  const [index, setIndex] = useState(0);
  const slidesRef = useRef(null);

  const admin2 = {
    title: 'KudosWorks 2.0 admin',
    subTitles: ['2024.01 ~ 2024.03'],
    descriptions: [
      {
        id: 'admin2_1',
        chipClass: 'description',
        chipText: 'Description',
        contents: [
          'IR(주주 및 투자자 관리) B2B 서비스를 이용하는 고객사 관리를 위한 어드민 프로젝트입니다.',
          '고객사 관리, 공통 코드 관리 등 비즈니스 요구에 맞는 백엔드와 프론트엔드를 개발했습니다.',
        ],
      },
      {
        id: 'admin2_2',
        chipClass: 'fe',
        chipText: 'FE',
        contents: [
          'yarn berry workspace 를 사용하여 레거시 프로젝트들을 모노레포 구성으로 변경',
          '프로젝트 개발 환경 구성',
          '디자인 시스템 기반의 공통 컴포넌트 개발 및 유지 보수',
          'Storybook 을 이용한 컴포넌트 문서화 및 관리 도입',
          'Cypress 를 이용한 컴포넌트 테스트 도입',
          'Vitest 를 이용한 유닛 테스트 도입',
          '프론트엔드 담당 개발자로서 서비스 UI 전반 구현',
          '로그인 및 사용자 권한 ',
        ],
      },
      {
        id: 'admin2_3',
        chipClass: 'be',
        chipText: 'BE',
        contents: [
          'Google Authenticator 을 이용한 OTP 인증 구현',
          'REST API 형식의 CRUD 개발',
        ],
      },
      {
        id: 'admin2_4',
        chipClass: 'stack',
        chipText: 'STACK',
        contents: ['Vue3 | Spring Boot | JPA | Oracle'],
      },
    ],
  };

  const kw2 = {
    title: 'Kudos Works 2.0',
    subTitles: ['2023.09 ~ 2024.12'],
    descriptions: [
      {
        id: 'kw2_1',
        chipClass: 'description',
        chipText: 'Description',
        contents: [
          '상장 기업에서 주주 및 투자자들을 관리하기 위해 사용하는 B2B 솔루션입니다.',
          '기존 솔루션의 차세대 프로젝트를 진행하며 프론트엔드와 백엔드를 개발했습니다.',
        ],
      },
      {
        id: 'kw2_2',
        chipClass: 'fe',
        chipText: 'FE',
        contents: [
          '상태 관리 라이브러리(Pinia)를 도입하여 props 복잡도 개선',
          'VuePress 를 이용한 컴포넌트 문서화 및 릴리즈 노트 관리',
          'WYSIWYG 에디터 커스텀 및 컴포넌트화',
          '디자인 시스템 기반의 공통 컴포넌트 개발 및 유지 보수',
          '프론트엔드 담당 개발자로서 서비스 UI 전반 구현',
        ],
      },
      {
        id: 'kw2_3',
        chipClass: 'be',
        chipText: 'BE',
        contents: [
          '테이블 데이터 엑셀 다운로드 간편화를 위한 공통 모듈 개발',
          '주주명부 등록 기능 개발 및 기존 INSERT 시간의 1/2 수준으로 단축 (500,000 건 기준)',
          'REST API 형식의 CRUD 개발',
        ],
      },
      {
        id: 'kw2_4',
        chipClass: 'stack',
        chipText: 'STACK',
        contents: ['Vue3 | Spring Boot | JPA | Oracle'],
      },
    ],
  };

  const chatBot = {
    title: '큐더스봇 (AI ChatBot)',
    subTitles: ['2023.08'],
    descriptions: [
      {
        id: 'chatBot1',
        chipClass: 'description',
        chipText: 'Description',
        contents: [
          '데이터 프레임워크를 활용하여 사내 규정 관련 질문에 대답하는 챗봇을 개발하였습니다.',
          '프론트엔드 개발을 전담하여 진행했습니다.',
        ],
      },
      {
        id: 'chatBot2',
        chipClass: 'fe',
        chipText: 'FE',
        contents: [
          '라마인덱스, 파이썬으로 개발된 백엔드와 실시간 웹 소켓 통신 구현',
          '역방향 무한 스크롤 형식의 채팅 UI 개발',
        ],
      },
      {
        id: 'chatBot3',
        chipClass: 'be',
        chipText: 'BE',
        contents: ['채팅 히스토리 저장 API 개발'],
      },
      {
        id: 'chatBot4',
        chipClass: 'stack',
        chipText: 'STACK',
        contents: ['Vue3 | Spring Boot'],
      },
    ],
  };

  const admin1 = {
    title: 'KudosWorks admin',
    subTitles: ['2023.02 ~ 2024.08'],
    descriptions: [
      {
        id: 'admin1_1',
        chipClass: 'description',
        chipText: 'Description',
        contents: [
          'IR(주주 및 투자자 관리) B2B 서비스를 이용하는 고객사 관리를 위한 어드민 프로젝트입니다.',
          '레거시 어드민의 차세대 시스템을 구축하기 위한 프로젝트입니다.',
          '신입 개발자로서 처음 맡게 된 프로젝트이며 혼자 서비스의 70% 가량을 개발하였습니다.',
        ],
      },
      {
        id: 'admin1_2',
        chipClass: 'fe',
        chipText: 'FE',
        contents: [
          '디자인 시스템 기반의 공통 컴포넌트 구축 시작 및 도입',
          '서비스 UI 전반 구현',
        ],
      },
      {
        id: 'admin1_3',
        chipClass: 'be',
        chipText: 'BE',
        contents: [
          '백엔드에서 주주명부 엑셀 파일 파싱 후 DB 에 한줄씩 INSERT (최대 1,000,000 건)',
          'REST API 형식의 CRUD 개발',
          '결재/공통 코드/사용자 권한 관리 등 개발',
        ],
      },
      {
        id: 'admin1_4',
        chipClass: 'stack',
        chipText: 'STACK',
        contents: ['Vue3 | Spring Boot | MyBatis | Microsoft SQL Server'],
      },
    ],
  };

  const shiftSlide = (direction) => {
    let newIndex = index + direction;

    if (newIndex < 0) newIndex = 3;
    else if (newIndex >= 4) newIndex = 0;

    setIndex(newIndex);
  };

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.left = `-${index * SLIDE_WIDTH}px`;
    }
  }, [index]);

  return (
    <div className='slider'>
      <div className='slide-container'>
        <div className='slide-wrapper' ref={slidesRef}>
          <Slide
            title={admin2.title}
            subTitles={admin2.subTitles}
            chip={admin2.chip}
            descriptions={admin2.descriptions}
            page={1}
          />
          <Slide
            title={kw2.title}
            subTitles={kw2.subTitles}
            chip={kw2.chip}
            descriptions={kw2.descriptions}
            page={2}
          />
          <Slide
            linkUrl={chatBot.linkUrl}
            title={chatBot.title}
            subTitles={chatBot.subTitles}
            chip={chatBot.chip}
            descriptions={chatBot.descriptions}
            page={3}
          />
          <Slide
            linkUrl={admin1.linkUrl}
            title={admin1.title}
            subTitles={admin1.subTitles}
            chip={admin1.chip}
            descriptions={admin1.descriptions}
            page={4}
          />
        </div>
      </div>
      <button className='btn prev' onClick={() => shiftSlide(-1)}></button>
      <button className='btn next' onClick={() => shiftSlide(1)}></button>
    </div>
  );
};

export default Slider;
