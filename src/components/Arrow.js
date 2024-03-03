import "../styles/components/Arrow.css";

const Arrow = ({ up }) => {
  const arrowClass = up ? "up" : "down";

  return (
    <>
      <div className={`arrow ${arrowClass}`}></div>
    </>
  );
};

export default Arrow;
