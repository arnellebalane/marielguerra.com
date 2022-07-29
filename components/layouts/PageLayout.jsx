import Header from '../common/Header';

const PageLayout = ({ children, page, siteConfig }) => {
  return (
    <div>
      <Header
        annotationPrefix={`${siteConfig.__id}:header`}
        {...siteConfig.header}
      />
      {children}
    </div>
  );
};

export default PageLayout;
