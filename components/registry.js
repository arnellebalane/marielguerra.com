import dynamic from 'next/dynamic';

const layouts = {
  AboutLayout: dynamic(() => import('./layouts/AboutLayout')),
  ContactLayout: dynamic(() => import('./layouts/ContactLayout')),
  HomeLayout: dynamic(() => import('./layouts/HomeLayout')),
  PortfolioLayout: dynamic(() => import('./layouts/PortfolioLayout')),
};

const sections = {
  AboutHeroSection: dynamic(() => import('./sections/AboutHeroSection')),
  AboutStorySection: dynamic(() => import('./sections/AboutStorySection')),
  EducationSection: dynamic(() => import('./sections/EducationSection')),
};

export function getLayout(key) {
  return layouts[key];
}

export function getSection(key) {
  return sections[key];
}
