import Image from 'next/image';

const Project = ({
  thumbnail,
  video,
  title,
  description,
  bgColor,
  textColor,
  tags,
  annotationPrefix = '',
}) => {
  return (
    <article data-sb-field-path={annotationPrefix}>
      {renderThumbnail(thumbnail)}
      {renderTitle(title)}
      {renderDescription(description)}
    </article>
  );
};

const renderThumbnail = (thumbnail) => {
  if (!thumbnail?.url) {
    return null;
  }
  return (
    <Image
      src={thumbnail.url}
      alt={thumbnail.altText}
      width="460"
      height="275"
      data-sb-field-path=".thumbnail.url#@src .thumbnail.altText#alt"
    />
  );
};

const renderTitle = (title) => {
  if (!title) {
    return null;
  }
  return <h2 data-sb-field-path=".title">{title}</h2>;
};

const renderDescription = (description) => {
  if (!description) {
    return null;
  }
  return <p data-sb-field-path=".description">{description}</p>;
};

export default Project;
