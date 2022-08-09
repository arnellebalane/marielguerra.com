import { useRouter } from 'next/router';
import PageLayout from './PageLayout';
import * as L from '../../styles/Layout.styles';
import * as S from './RedirectLayout.styles';

const RedirectLayout = ({ page, siteConfig, themeStyle }) => {
  const router = useRouter();
  const message = router.query.text
    ? decodeURIComponent(router.query.text)
    : 'Form submitted successfully.';

  return (
    <PageLayout page={page} siteConfig={siteConfig} themeStyle={themeStyle}>
      <L.Wrapper data-sb-object-id={page.__id}>
        <L.Spacer />
        <S.Message>{message}</S.Message>
        <L.Spacer />
      </L.Wrapper>
    </PageLayout>
  );
};

export default RedirectLayout;
