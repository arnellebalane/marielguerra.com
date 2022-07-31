import Markdown from 'markdown-to-jsx';
import ImageGallery from '../common/ImageGallery';
import WorkExperience from '../common/WorkExperience';

const AboutStorySection = ({
  workExperiences,
  content,
  galleries,
  closingText,
  annotationPrefix = '',
}) => {
  return null;
  return (
    <section data-sb-field-path={annotationPrefix}>
      {workExperiences?.length > 0 && renderWorkExperiences(workExperiences)}
      {content?.length > 0 && renderContent(content)}
      {galleries?.length > 0 && renderGalleries(galleries)}
      {closingText && renderClosingText(closingText)}
    </section>
  );
};

const renderWorkExperiences = (workExperiences) => {
  return (
    <div data-sb-field-path=".workExperiences">
      {workExperiences.map((workExperience, index) => (
        <WorkExperience
          key={index}
          annotationPrefix={`.[${index}]`}
          {...workExperience}
        />
      ))}
    </div>
  );
};

const renderContent = (content) => {
  return (
    <div data-sb-field-path=".content">
      {content.map((content, index) => (
        <div key={index} data-sb-field-path={`.[${index}]`}>
          <Markdown>{content}</Markdown>
        </div>
      ))}
    </div>
  );
};

const renderGalleries = (galleries) => {
  return (
    <div data-sb-field-path=".galleries">
      {galleries.map((gallery, index) => (
        <ImageGallery
          key={index}
          annotationPrefix={`.[${index}]`}
          {...gallery}
        />
      ))}
    </div>
  );
};

const renderClosingText = (closingText) => {
  return <h3 data-sb-field-path=".closingText">{closingText}</h3>;
};

export default AboutStorySection;
