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
          {description && <span>{description}</span>}
        </div>

        <div className='container'>{content}</div>
      </section>
    </>
  );
};

export default Section;
