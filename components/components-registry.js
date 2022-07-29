import dynamic from 'next/dynamic';

const components = {
  BlankLayout: dynamic(() => import('./layouts/BlankLayout')),
  HomePage: dynamic(() => import('./pages/HomePage')),
};

export function getComponent(key) {
  return components[key];
}
