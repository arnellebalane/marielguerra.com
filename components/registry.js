import dynamic from 'next/dynamic';

const layouts = {
  AboutLayout: dynamic(() => import('./layouts/AboutLayout')),
  HomeLayout: dynamic(() => import('./layouts/HomeLayout')),
};

export function getLayout(key) {
  return layouts[key];
}
