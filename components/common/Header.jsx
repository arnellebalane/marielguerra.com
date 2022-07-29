import Link from 'next/link';

const renderHomeLink = (annotationPrefix, homeLink) => {
  return (
    <Link
      href={homeLink.url}
      data-sb-field-path={`${annotationPrefix}:homeLink.url#@href ${annotationPrefix}:homeLink.label`}
    >
      {homeLink.label}
    </Link>
  );
};

const renderNavigationLinks = (annotationPrefix, navigationLinks) => {
  return (
    <nav data-sb-field-path={`${annotationPrefix}:navigationLinks`}>
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          data-sb-field-path={`.[${index}].url#@href .[${index}].label`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

const Header = ({ annotationPrefix, homeLink, navigationLinks }) => {
  return (
    <header>
      {homeLink && renderHomeLink(annotationPrefix, homeLink)}
      {navigationLinks?.length &&
        renderNavigationLinks(annotationPrefix, navigationLinks)}
    </header>
  );
};

export default Header;
