import PageLayout from './PageLayout';
import MarkdownContent from '../common/MarkdownContent';
import ProjectsFeed from '../common/ProjectsFeed';
import * as L from '../../styles/Layout.styles';
import * as S from './PortfolioLayout.styles';

const PortfolioLayout = ({ page, siteConfig }) => {
  return (
    <PageLayout page={page} siteConfig={siteConfig}>
      <L.Wrapper>
        <L.Spacer />
        <L.Grid>
          <S.PageContent data-sb-object-id={page.__id}>
            {renderContent(page.content)}
            {renderProjects(page.projects)}
          </S.PageContent>
        </L.Grid>
        <L.Spacer />
      </L.Wrapper>
    </PageLayout>
  );
};

const renderContent = (content) => {
  if (!content) {
    return null;
  }
  return (
    <S.PageSection>
      <MarkdownContent data-sb-field-path=".content">{content}</MarkdownContent>
    </S.PageSection>
  );
};

const renderProjects = (projects) => {
  if (projects?.length === 0) {
    return null;
  }
  return (
    <S.PageSection>
      <ProjectsFeed projects={projects} annotationPrefix=".projects" />
    </S.PageSection>
  );
};

export default PortfolioLayout;
