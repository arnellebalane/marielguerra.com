import Header from '../common/Header';
import Footer from '../common/Footer';

const PageLayout = ({ children, page, siteConfig }) => {
  return (
    <div>
      <Header
        annotationPrefix={`${siteConfig.__id}:header`}
        {...siteConfig.header}
      />
      {children}
      <Footer
        annotationPrefix={`${siteConfig.__id}:footer`}
        {...siteConfig.footer}
      />
    </div>
  );
};

export default PageLayout;
