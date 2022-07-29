import Link from 'next/link';
import Education from '../common/Education';

const EducationSection = ({
  title,
  educations,
  link,
  annotationPrefix = '',
}) => {
  return (
    <section data-sb-field-path={annotationPrefix}>
      {title && renderTitle(title)}
      {educations?.length > 0 && renderEducations(educations)}
      {link && renderLink(link)}
    </section>
  );
};

const renderTitle = (title) => {
  return <h2 data-sb-field-path=".title">{title}</h2>;
};

const renderEducations = (educations) => {
  return (
    <div data-sb-field-path=".educations">
      {educations.map((education, index) => (
        <Education
          key={index}
          annotationPrefix={`.[${index}]`}
          {...education}
        />
      ))}
    </div>
  );
};

const renderLink = (link) => {
  return (
    <Link href={link.url}>
      <a data-sb-field-path=".link.url#@href .link.label">{link.label}</a>
    </Link>
  );
};

export default EducationSection;
