import Markdown from 'markdown-to-jsx';
import ImageGallery from '../common/ImageGallery';
import WorkExperience from '../common/WorkExperience';
import * as L from '../../styles/Layout.styles';
import * as S from './AboutStorySection.styles';

const AboutStorySection = ({
  workExperiences,
  content,
  galleries,
  closingText,
  annotationPrefix = '',
}) => {
  return (
    <S.Section data-sb-field-path={annotationPrefix}>
      <L.Wrapper>
        <L.GridProperties>
          <S.MobileLayout>
            {renderContent(content, 0)}
            {renderWorkExperience(workExperiences, 0)}
            {renderContent(content, 1)}
            {renderWorkExperience(workExperiences, 1)}
            {renderWorkExperience(workExperiences, 2)}
            {renderGallery(galleries, 0)}
            {renderContent(content, 2)}
            {renderWorkExperience(workExperiences, 3)}
            {renderGallery(galleries, 1)}
            {renderContent(content, 3)}
            {renderWorkExperience(workExperiences, 4)}
            {renderGallery(galleries, 2)}
            {renderClosingText(closingText)}
          </S.MobileLayout>

          <S.DesktopLayout>
            <div>
              {renderContent(content, 0)}
              {renderWorkExperience(workExperiences, 1)}
              {renderWorkExperience(workExperiences, 2)}
              {renderWorkExperience(workExperiences, 3)}
              {renderContent(content, 3)}
              {renderGallery(galleries, 1)}
              {renderClosingText(closingText)}
            </div>
            <div>
              {renderWorkExperience(workExperiences, 0)}
              {renderContent(content, 1)}
              {renderGallery(galleries, 0)}
              {renderContent(content, 2)}
              {renderWorkExperience(workExperiences, 4)}
              {renderGallery(galleries, 2)}
            </div>
          </S.DesktopLayout>
        </L.GridProperties>
      </L.Wrapper>
    </S.Section>
  );
};

const renderContent = (contents, index) => {
  const content = contents[index];
  if (!content) {
    return (
      <S.ContentPlaceholder
        data-sc-index={index}
        data-sb-field-path={`.content.[${index}]`}
      />
    );
  }
  return (
    <S.ContentWrapper data-sc-index={index}>
      <Markdown data-sb-field-path={`.content.[${index}]`}>{content}</Markdown>
    </S.ContentWrapper>
  );
};

const renderWorkExperience = (workExperiences, index) => {
  const workExperience = workExperiences[index];
  if (!workExperience) {
    return (
      <S.WorkExperiencePlaceholder
        data-sc-index={index}
        data-sb-field-path={`.workExperiences.[${index}]`}
      />
    );
  }
  return (
    <S.WorkExperienceWrapper data-sc-index={index}>
      <WorkExperience
        annotationPrefix={`.workExperiences.[${index}]`}
        {...workExperience}
      />
    </S.WorkExperienceWrapper>
  );
};

const renderGallery = (galleries, index) => {
  const gallery = galleries[index];
  if (!gallery) {
    return (
      <S.GalleryPlaceholder
        data-sc-index={index}
        data-sb-field-path={`.galleries.[${index}]`}
      />
    );
  }
  return (
    <S.GalleryWrapper data-sc-index={index}>
      <ImageGallery annotationPrefix={`.galleries.[${index}]`} {...gallery} />
    </S.GalleryWrapper>
  );
};

const renderClosingText = (closingText) => {
  if (!closingText) {
    return null;
  }
  return (
    <S.ClosingText data-sb-field-path=".closingText">
      {closingText}
    </S.ClosingText>
  );
};

export default AboutStorySection;
