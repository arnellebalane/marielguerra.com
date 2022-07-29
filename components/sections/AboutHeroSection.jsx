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
      {image?.url && renderImage(image)}
      {title && renderTitle(title)}
      {description && renderDescription(description)}
    </section>
  );
};

const renderImage = (image) => {
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
  return <Markdown data-sb-field-path=".title">{title}</Markdown>;
};

const renderDescription = (description) => {
  return <Markdown data-sb-field-path=".description">{description}</Markdown>;
};

const renderBackground = (background) => {
  return background?.url ? `url(${background.url})` : 'none';
};

export default AboutHeroSection;
