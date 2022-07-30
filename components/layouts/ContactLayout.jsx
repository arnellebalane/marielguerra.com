import PageLayout from './PageLayout';
import MarkdownContent from '../common/MarkdownContent';
import Form from '../common/Form';
import * as L from '../../styles/Layout.styles';
import * as S from './ContactLayout.styles';

const ContactLayout = ({ page, siteConfig }) => {
  return (
    <PageLayout page={page} siteConfig={siteConfig}>
      <L.Wrapper data-sb-object-id={page.__id}>
        <S.ContactSpacer />
        <L.Grid>
          <S.PageContent>
            {renderContent(page.content)}
            {renderForm(page.fields, page.submitLabel)}
          </S.PageContent>
        </L.Grid>
      </L.Wrapper>
    </PageLayout>
  );
};

const renderContent = (content) => {
  if (!content) {
    return null;
  }
  return (
    <S.ContactSection>
      <MarkdownContent data-sb-field-path=".content">{content}</MarkdownContent>
    </S.ContactSection>
  );
};

const renderForm = (fields, submitLabel = 'Submit') => {
  if (fields?.length === 0) {
    return null;
  }
  return (
    <S.ContactSection>
      <Form
        fields={fields}
        submitLabel={submitLabel}
        annotationPrefix=".fields"
      />
    </S.ContactSection>
  );
};

export default ContactLayout;
