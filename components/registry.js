import dynamic from 'next/dynamic';

const layouts = {
  HomePageLayout: dynamic(() => import('./layouts/HomePageLayout')),
};

export function getLayout(key) {
  return layouts[key];
}
