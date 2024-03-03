import "../styles/components/Section.css";

const Section = ({ title, content }) => {
  return (
    <>
      <section className='section'>
        <div className='section-title-wrap'>
          <h1>
            <span>{title}</span>
          </h1>
        </div>

        {content}
      </section>
    </>
  );
};

export default Section;
