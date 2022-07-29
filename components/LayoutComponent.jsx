import PageComponent from './PageComponent';
import { getComponent } from './components-registry';

const LayoutComponent = ({ page, ...props }) => {
  if (!page.layout) {
    const propsOutput = JSON.stringify(props, null, 2);
    throw new Error(`Object does not have a 'layout' property: ${propsOutput}`);
  }

  const Layout = getComponent(page.layout);
  if (!Layout) {
    throw new Error(`No layout is registered for type:'${page.layout}`);
  }

  return (
    <Layout page={page} {...props}>
      <PageComponent page={page} {...props} />
    </Layout>
  );
};

export default LayoutComponent;
