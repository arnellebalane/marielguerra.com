import Head from 'next/head';
import ThemedLayout from './ThemedLayout';
import Header from '../common/Header';
import Footer from '../common/Footer';
import * as S from './PageLayout.styles';

const PageLayout = ({
  children,
  page,
  siteConfig,
  themeStyle,
  invertedHeader = false,
  overlapHeader = false,
}) => {
  return (
    <ThemedLayout themeStyle={themeStyle}>
      <S.PageContent>
        <Head>
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <Header
          annotationPrefix={`${siteConfig.__id}:header`}
          inverted={invertedHeader}
          overlap={overlapHeader}
          {...siteConfig.header}
        />
        {children}
        <Footer
          annotationPrefix={`${siteConfig.__id}:footer`}
          {...siteConfig.footer}
        />
      </S.PageContent>
    </ThemedLayout>
  );
};

export default PageLayout;
