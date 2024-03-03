import React from "react";
import SkillCard from "./SkillCard";
import "../styles/components/SkillContainer.css";

const SkillContainer = ({ skills }) => {
  return (
    <>
      <div className='skill-container'>
        {skills.map((skill, skillIndex) => (
          <SkillCard
            key={`skill_${skillIndex}`}
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
