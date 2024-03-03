import "../../styles/pages/main/MainWave.css";

const MainWave = () => {
  return (
    <>
      <svg
        className='wave-graphics'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 24 150 28'
        preserveAspectRatio='none'
      >
        <defs>
          <path
            id='gentle-wave'
            d='M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
          />
        </defs>
        <g className='wave-group'>
          <use href='#gentle-wave' x='50' y='0' fill='#FFE9AE' />
          <use href='#gentle-wave' x='50' y='3' fill='#FFB3B3' />
          <use href='#gentle-wave' x='50' y='6' fill='#C1EFFF' />
        </g>
      </svg>
    </>
  );
};

export default MainWave;
