import SEO from '../components/common/SEO';
import LayoutComponent from '../components/LayoutComponent';
import {
  pagesWithLayout,
  siteConfig,
  themeStyle,
  urlToContent,
} from '../utils/content';

const DynamicPage = ({ page, siteConfig, themeStyle }) => {
  return (
    <>
      <SEO page={page} />
      <LayoutComponent
        page={page}
        siteConfig={siteConfig}
        themeStyle={themeStyle}
      />
    </>
  );
};

export default DynamicPage;

export function getStaticProps({ params }) {
  const url = '/' + (params.slug || []).join('/');
  return {
    props: {
      page: urlToContent(url),
      siteConfig: siteConfig(),
      themeStyle: themeStyle(),
    },
  };
}

export function getStaticPaths() {
  const pages = pagesWithLayout();
  return {
    paths: Object.keys(pages),
    fallback: false,
  };
}
