import Image from 'next/image';
import * as S from './Education.styles';

const Education = ({
  thumbnail,
  title,
  institution,
  duration,
  bgColor,
  textColor,
  annotationPrefix = '',
}) => {
  return (
    <S.Education
      data-sc-text={textColor}
      data-sc-background={bgColor}
      data-sb-field-path={annotationPrefix}
    >
      {renderThumbnail(thumbnail)}
      {renderTitle(title)}
      {renderInstitution(institution)}
      {renderDuration(duration)}
    </S.Education>
  );
};

const renderThumbnail = (thumbnail) => {
  if (!thumbnail?.url) {
    return null;
  }
  return (
    <S.ThumbnailWrapper>
      <Image
        src={thumbnail.url}
        alt={thumbnail.altText}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        data-sb-field-path=".thumbnail.url#@src .thumbnail.altText#@alt"
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

const renderInstitution = (institution) => {
  if (!institution) {
    return null;
  }
  return (
    <S.Institution data-sb-field-path=".institution">
      {institution}
    </S.Institution>
  );
};

const renderDuration = (duration) => {
  if (!duration) {
    return null;
  }
  return <S.Duration data-sb-field-path=".duration">{duration}</S.Duration>;
};

export default Education;
