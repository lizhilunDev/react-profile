import '../styles/components/Section.css';
import classNames from 'classnames';

const Section = ({ id, title, content, className, description = '' }) => {
  return (
    <>
      <section id={id} className={classNames('section', className)}>
        <div className='section-title-wrap'>
          <h1>
            <span>{title}</span>
          </h1>
        </div>
        <div className='container'>{content}</div>

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
