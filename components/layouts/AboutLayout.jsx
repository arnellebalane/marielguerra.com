import PageLayout from './PageLayout';
import { getSection } from '../registry';

const AboutLayout = ({ page, siteConfig }) => {
  return (
    <PageLayout page={page} siteConfig={siteConfig}>
      <div data-sb-object-id={page.__id}>
        {page.sections?.length &&
          page.sections.map((section, index) =>
            renderSection(section, index, `.sections`),
          )}
      </div>
    </PageLayout>
  );
};

const renderSection = (section, index, annotationPrefix) => {
  const Section = getSection(section.type);
  if (!Section) {
    return null;
  }
  return (
    <Section
      key={index}
      annotationPrefix={`${annotationPrefix}.[${index}]`}
      {...section}
    />
  );
};

export default AboutLayout;
