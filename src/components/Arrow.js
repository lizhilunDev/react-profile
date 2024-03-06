import "../styles/components/Arrow.css";

const Arrow = ({ up, onClick }) => {
  const arrowClass = up ? "up" : "down";

  return (
    <>
      <div className={`arrow ${arrowClass}`} onClick={onClick}></div>
    </>
  );
};

export default Arrow;
