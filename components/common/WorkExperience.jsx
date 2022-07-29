import Image from 'next/image';

const WorkExperience = ({
  thumbnail,
  title,
  company,
  duration,
  location,
  description,
  annotationPrefix = '',
}) => {
  return (
    <article data-sb-field-path={annotationPrefix}>
      {renderThumbnail(thumbnail)}
      {renderTitleAndCompany(title, company)}
      {renderDurationAndLocation(duration, location)}
      {renderDescription(description)}
    </article>
  );
};

const renderThumbnail = (thumbnail) => {
  if (!thumbnail?.url) {
    return null;
  }
  return (
    <div
      style={{
        position: 'relative',
        width: '500px',
        aspectRatio: '16 / 9',
      }}
    >
      <Image
        src={thumbnail.url}
        alt={thumbnail.altText}
        layout="fill"
        data-sb-field-path=".thumbnail.url#@src .thumbnail.altText#@alt"
      />
    </div>
  );
};

const renderTitleAndCompany = (title, company) => {
  if (!title && !company) {
    return null;
  }
  return (
    <h2>
      {title && <span data-sb-field-path=".title">{title}</span>}
      {title && company && ', '}
      {company && <span data-sb-field-path=".company">{company}</span>}
    </h2>
  );
};

const renderDurationAndLocation = (duration, location) => {
  if (!duration && !location) {
    return null;
  }
  return (
    <p>
      {duration && <span data-sb-field-path=".duration">{duration}</span>}
      {duration && location && ' | '}
      {location && <span data-sb-field-path=".location">{location}</span>}
    </p>
  );
};

const renderDescription = (description) => {
  if (description?.length === 0) {
    return null;
  }
  return (
    <ul data-sb-field-path=".description">
      {description.map((desc, index) => (
        <li key={index} data-sb-field-path={`.[${index}]`}>
          {desc}
        </li>
      ))}
    </ul>
  );
};

export default WorkExperience;
