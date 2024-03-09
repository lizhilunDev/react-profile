import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import './Slide.scss';

const Slide = ({ title = '', subTitles = [], descriptions = {}, page }) => {
  const [showTopBorder, setShowTopBorder] = useState(false);
  const [showBottomBorder, setShowBottomBorder] = useState(false);

  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollHeight = scrollRef.current.scrollHeight;
    const scrollTop = scrollRef.current.scrollTop;
    const clientHeight = scrollRef.current.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setShowTopBorder(true);
      setShowBottomBorder(false);
    } else if (scrollTop === scrollHeight && scrollTop === 0) {
      setShowTopBorder(false);
      setShowBottomBorder(false);
    } else if (scrollTop !== scrollHeight && scrollTop === 0) {
      setShowTopBorder(false);
      setShowBottomBorder(true);
    } else {
      setShowTopBorder(true);
      setShowBottomBorder(true);
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      const el = scrollRef.current;
      const exists = el.scrollHeight > el.clientHeight;

      if (exists) setShowBottomBorder(true);
    };

    checkScroll();

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className='slide'>
        <div className='inner-left'>
          <div className='title-wrapper'>
            <h1>{title}</h1>
            {subTitles.map((subTitle, index) => (
              <h2 key={`subtitle_${index}`}>{subTitle}</h2>
            ))}
          </div>
          <div className='page-wrapper'>
            <h2 className='page'>{page} / 4</h2>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={classNames(
            'inner-right',
            { 'has-top-scroll': showTopBorder },
            { 'has-bottom-scroll': showBottomBorder }
          )}
        >
          {descriptions.map((desc, index) => (
            <div key={`description_${index}`}>
              <h2 className={desc.chipClass}>{desc.chipText}</h2>
              {desc.contents.map((content, i) => (
                <ul key={`content_${i}`}>
                  <li
                    className={
                      desc.chipClass !== 'description' ? 'list-style' : ''
                    }
                  >
                    <span>{content}</span>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
