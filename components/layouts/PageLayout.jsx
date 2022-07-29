import Header from '../common/Header';

const PageLayout = ({ children, page, siteConfig }) => {
  return (
    <div>
      <Header annotationPrefix={page.__id} {...siteConfig.header} />
      {children}
    </div>
  );
};

export default PageLayout;
