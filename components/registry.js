import dynamic from 'next/dynamic';

const layouts = {
  AboutLayout: dynamic(() => import('./layouts/AboutLayout')),
  HomeLayout: dynamic(() => import('./layouts/HomeLayout')),
};

const sections = {
  AboutHeroSection: dynamic(() => import('./sections/AboutHeroSection')),
};

export function getLayout(key) {
  return layouts[key];
}

export function getSection(key) {
  return sections[key];
}
