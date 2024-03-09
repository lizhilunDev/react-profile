import React, { useState, useEffect } from 'react';
import './Cursor.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        left: e.pageX - 10,
        top: e.pageY - 10,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className='circle'
        style={{
          position: 'absolute',
          left: `${position.left}px`,
          top: `${position.top}px`,
        }}
      />
    </>
  );
};

export default Cursor;
