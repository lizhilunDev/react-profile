import '../styles/components/Section.css';
import classNames from 'classnames';

const Section = ({ title, content, noBorder = false, description = '' }) => {
  return (
    <>
      <section className={classNames('section', { 'no-border': noBorder })}>
        <div className='section-title-wrap'>
          <h1>
            <span>{title}</span>
          </h1>
        </div>

        {content}
        {description && (
          <div className='description-wrap'>
            <span>{description}</span>
          </div>
        )}
      </section>
    </>
  );
};

export default Section;
