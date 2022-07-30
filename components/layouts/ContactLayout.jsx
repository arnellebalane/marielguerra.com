import PageLayout from './PageLayout';
import MarkdownContent from '../common/MarkdownContent';
import Form from '../common/Form';
import * as L from '../../styles/Layout.styles';
import * as S from './ContactLayout.styles';

const ContactLayout = ({ page, siteConfig }) => {
  return (
    <PageLayout page={page} siteConfig={siteConfig}>
      <L.Wrapper>
        <L.Spacer />
        <L.Grid>
          <S.PageContent data-sb-object-id={page.__id}>
            {renderContent(page.content)}
            {renderForm(page)}
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

const renderForm = (page) => {
  if (page.fields?.length === 0) {
    return null;
  }
  return (
    <S.PageSection>
      <Form
        formName={page.formName}
        fields={page.fields}
        submitLabel={page.submitLabel}
        submissionSubject={page.submissionSubject}
        successMessage={page.successMessage}
        annotationPrefix=".fields"
      />
    </S.PageSection>
  );
};

export default ContactLayout;
