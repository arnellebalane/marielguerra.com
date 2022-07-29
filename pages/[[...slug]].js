import LayoutComponent from '../components/LayoutComponent';
import { pagesWithLayout, siteConfig, urlToContent } from '../utils/content';

const DynamicPage = ({ page, siteConfig }) => {
  return <LayoutComponent page={page} siteConfig={siteConfig} />;
};

export default DynamicPage;

export function getStaticProps({ params }) {
  const url = '/' + (params.slug || []).join('/');
  return { props: { page: urlToContent(url), siteConfig: siteConfig() } };
}

export function getStaticPaths() {
  const pages = pagesWithLayout();
  return {
    paths: Object.keys(pages),
    fallback: false,
  };
}
