import { getLayout } from './registry';

const LayoutComponent = ({ page, ...props }) => {
  if (!page.layout) {
    const pageOutput = JSON.stringify(page, null, 2);
    throw new Error(`Object does not have a 'layout' property: ${pageOutput}`);
  }

  const Layout = getLayout(page.layout);
  if (!Layout) {
    throw new Error(`No layout is registered for type:'${page.layout}`);
  }

  return <Layout page={page} {...props} />;
};

export default LayoutComponent;
