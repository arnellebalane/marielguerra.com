import Link from 'next/link';

const Header = ({ homeLink, navigationLinks, annotationPrefix = '' }) => {
  return (
    <header data-sb-field-path={annotationPrefix}>
      {homeLink && renderHomeLink(homeLink, annotationPrefix)}
      {navigationLinks?.length > 0 &&
        renderNavigationLinks(navigationLinks, annotationPrefix)}
    </header>
  );
};

const renderHomeLink = (homeLink, annotationPrefix) => {
  return (
    <Link href={homeLink.url}>
      <a
        data-sb-field-path={`${annotationPrefix}.homeLink.url#@href ${annotationPrefix}.homeLink.label`}
      >
        {homeLink.label}
      </a>
    </Link>
  );
};

const renderNavigationLinks = (navigationLinks, annotationPrefix) => {
  return (
    <nav>
      {navigationLinks.map((link, index) => (
        <Link key={index} href={link.url}>
          <a
            data-sb-field-path={`${annotationPrefix}.navigationLinks.[${index}].url#@href ${annotationPrefix}.navigationLinks.[${index}].label`}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Header;
