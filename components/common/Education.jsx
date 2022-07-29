import Image from 'next/image';

const Education = ({
  thumbnail,
  title,
  institution,
  duration,
  annotationPrefix = '',
}) => {
  return (
    <article data-sb-field-path={annotationPrefix}>
      {thumbnail?.url && (
        <Image
          src={thumbnail.url}
          alt={thumbnail.altText}
          width="420"
          height="240"
          data-sb-field-path=".thumbnail.url#@src .thumbnail.altText#@alt"
        />
      )}

      {title && <h2 data-sb-field-path=".title">{title}</h2>}
      {institution && <h3 data-sb-field-path=".institution">{institution}</h3>}
      {duration && <p data-sb-field-path=".duration">{duration}</p>}
    </article>
  );
};

export default Education;
