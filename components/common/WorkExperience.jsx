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
      {thumbnail?.url && (
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
      )}

      <h3>
        <span data-sb-field-path=".title">{title}</span>,
        <span data-sb-field-path=".company">{company}</span>
      </h3>
      <p>
        <span data-sb-field-path=".duration">{duration}</span> |
        <span data-sb-field-path=".location">{location}</span>
      </p>

      <ul data-sb-field-path=".description">
        {description.map((desc, index) => (
          <li key={index} data-sb-field-path={`.[${index}]`}>
            {desc}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default WorkExperience;
