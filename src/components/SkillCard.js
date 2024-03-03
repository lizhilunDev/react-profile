import "../styles/components/SkillCard.css";

const SkillCard = ({ imgSrc = null, imgAlt = null, title, description }) => {
  return (
    <>
      <div className='skill-card'>
        <div className='skill-title'>
          {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} />}
          <span>{title}</span>
        </div>
        <div className='skill-content'>{description}</div>
      </div>
    </>
  );
};

export default SkillCard;
