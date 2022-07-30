import Image from 'next/image';
import * as S from './Project.styles';

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
    <S.Project tabIndex={0} data-sb-field-path={annotationPrefix}>
      {renderThumbnail(thumbnail)}
      <S.Details data-sc-text={textColor} data-sc-background={bgColor}>
        {renderTitle(title)}
        {renderDescription(description)}
      </S.Details>
    </S.Project>
  );
};

const renderThumbnail = (thumbnail) => {
  if (!thumbnail?.url) {
    return <S.ThumbnailWrapper />;
  }
  return (
    <S.ThumbnailWrapper>
      <Image
        src={thumbnail.url}
        alt={thumbnail.altText}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        data-sb-field-path=".thumbnail.url#@src .thumbnail.altText#alt"
      />
    </S.ThumbnailWrapper>
  );
};

const renderTitle = (title) => {
  if (!title) {
    return null;
  }
  return <S.Title data-sb-field-path=".title">{title}</S.Title>;
};

const renderDescription = (description) => {
  if (!description) {
    return null;
  }
  return (
    <S.Description data-sb-field-path=".description">
      {description}
    </S.Description>
  );
};

export default Project;
