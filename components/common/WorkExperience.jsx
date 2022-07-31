import Image from 'next/image';
import * as S from './WorkExperience.styles';

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
    <S.WorkExperience data-sb-field-path={annotationPrefix}>
      {renderThumbnail(thumbnail)}
      {renderTitleAndCompany(title, company)}
      {renderDurationAndLocation(duration, location)}
      {renderDescription(description)}
    </S.WorkExperience>
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

const renderTitleAndCompany = (title, company) => {
  if (!title && !company) {
    return null;
  }
  return (
    <S.TitleAndCompany>
      {title && <S.Title data-sb-field-path=".title">{title}</S.Title>}
      {title && company && ', '}
      {company && <span data-sb-field-path=".company">{company}</span>}
    </S.TitleAndCompany>
  );
};

const renderDurationAndLocation = (duration, location) => {
  if (!duration && !location) {
    return null;
  }
  return (
    <S.DurationAndLocation>
      {duration && <span data-sb-field-path=".duration">{duration}</span>}
      {duration && location && ' | '}
      {location && <span data-sb-field-path=".location">{location}</span>}
    </S.DurationAndLocation>
  );
};

const renderDescription = (description) => {
  if (description?.length === 0) {
    return null;
  }
  return (
    <S.DescriptionList data-sb-field-path=".description">
      {description.map((desc, index) => (
        <S.Description key={index} data-sb-field-path={`.[${index}]`}>
          {desc}
        </S.Description>
      ))}
    </S.DescriptionList>
  );
};

export default WorkExperience;
