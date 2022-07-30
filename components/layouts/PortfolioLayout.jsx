import Markdown from 'markdown-to-jsx';
import Project from '../common/Project';
import PageLayout from './PageLayout';

const PortfolioLayout = ({ page, siteConfig }) => {
  return (
    <PageLayout page={page} siteConfig={siteConfig} invertedHeader>
      <div data-sb-object-id={page.__id}>
        {renderContent(page.content)}
        {renderProjects(page.projects)}
      </div>
    </PageLayout>
  );
};

const renderContent = (content) => {
  if (!content) {
    return null;
  }
  return <Markdown data-sb-field-path=".content">{content}</Markdown>;
};

const renderProjects = (projects) => {
  if (projects?.length === 0) {
    return null;
  }
  return (
    <div data-sb-field-path=".projects">
      {projects.map((project, index) => (
        <Project key={index} annotationPrefix={`.[${index}]`} {...project} />
      ))}
    </div>
  );
};

export default PortfolioLayout;
