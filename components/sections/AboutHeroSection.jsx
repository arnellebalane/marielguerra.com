import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

const AboutHeroSection = ({
  image,
  title,
  description,
  background,
  annotationPrefix,
}) => {
  return (
    <section
      style={{ backgroundImage: renderBackground(background) }}
      data-sb-field-path={annotationPrefix}
    >
      {renderImage(image)}
      {renderTitle(title)}
      {renderDescription(description)}
    </section>
  );
};

const renderImage = (image) => {
  if (!image?.url) {
    return null;
  }
  return (
    <Image
      src={image.url}
      alt={image.altText}
      width="132"
      height="132"
      data-sb-field-path={`.image.url#@src .image.altText#@alt`}
    />
  );
};

const renderTitle = (title) => {
  if (!title) {
    return null;
  }
  return <Markdown data-sb-field-path=".title">{title}</Markdown>;
};

const renderDescription = (description) => {
  if (!description) {
    return null;
  }
  return <Markdown data-sb-field-path=".description">{description}</Markdown>;
};

const renderBackground = (background) => {
  if (!background?.url) {
    return 'none';
  }
  return `url(${background.url})`;
};

export default AboutHeroSection;
