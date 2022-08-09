import PageLayout from './PageLayout';
import { getSection } from '../registry';

const AboutLayout = ({ page, siteConfig, themeStyle }) => {
  const isFirstSectionHero = page.sections?.[0].type === 'AboutHeroSection';

  return (
    <PageLayout
      page={page}
      siteConfig={siteConfig}
      themeStyle={themeStyle}
      invertedHeader={isFirstSectionHero}
      overlapHeader={isFirstSectionHero}
    >
      <div data-sb-object-id={page.__id}>
        {page.sections?.length > 0 &&
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
