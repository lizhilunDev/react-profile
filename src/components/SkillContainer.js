import React from 'react';
import SkillCard from './SkillCard';
import '../styles/components/SkillContainer.css';

const SkillContainer = ({ skills }) => {
  return (
    <>
      <div className='skill-container'>
        {skills.map((skill, index) => (
          <SkillCard
            key={`skill_${index}`}
            imgSrc={skill.imgSrc}
            imgAlt={skill.imgAlt}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </>
  );
};

export default SkillContainer;
