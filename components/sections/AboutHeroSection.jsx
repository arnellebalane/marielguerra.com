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
      data-sb-field-path={`${annotationPrefix}.background.url#@style`}
    >
      {image?.url && renderImage(image, annotationPrefix)}
      {title && renderTitle(title, annotationPrefix)}
      {description && renderDescription(description, annotationPrefix)}
    </section>
  );
};

const renderImage = (image, annotationPrefix) => {
  return (
    <Image
      src={image.url}
      alt={image.altText}
      width="132"
      height="132"
      data-sb-field-path={`${annotationPrefix}.image.url#@src ${annotationPrefix}.image.altText#@alt`}
    />
  );
};

const renderTitle = (title, annotationPrefix) => {
  return (
    <Markdown data-sb-field-path={`${annotationPrefix}.title`}>
      {title}
    </Markdown>
  );
};

const renderDescription = (description, annotationPrefix) => {
  return (
    <Markdown data-sb-field-path={`${annotationPrefix}.description`}>
      {description}
    </Markdown>
  );
};

const renderBackground = (background) => {
  return background?.url ? `url(${background.url})` : 'none';
};

export default AboutHeroSection;
