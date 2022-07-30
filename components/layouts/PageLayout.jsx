import Head from 'next/head';
import Header from '../common/Header';
import Footer from '../common/Footer';

const PageLayout = ({ children, page, siteConfig, invertedHeader = false }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header
        annotationPrefix={`${siteConfig.__id}:header`}
        inverted={invertedHeader}
        {...siteConfig.header}
      />
      {children}
      <Footer
        annotationPrefix={`${siteConfig.__id}:footer`}
        {...siteConfig.footer}
      />
    </>
  );
};

export default PageLayout;
