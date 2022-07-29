import { getComponent } from './components-registry';

const PageComponent = ({ page, ...props }) => {
  if (!page.type) {
    const propsOutput = JSON.stringify(props, null, 2);
    throw new Error(`Object does not have a 'type' property: ${propsOutput}`);
  }

  const Page = getComponent(page.type);
  if (!Page) {
    throw new Error(`No component is registered for type: ${page.type}`);
  }

  return <Page page={page} {...props} />;
};

export default PageComponent;
