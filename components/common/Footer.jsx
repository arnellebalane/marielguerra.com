import Link from 'next/link';

const Footer = ({
  title,
  contactLinks,
  socialLinks,
  annotationPrefix = '',
}) => {
  return (
    <footer data-sb-field-path={annotationPrefix}>
      {renderTitle(title, annotationPrefix)}
      {renderContactLinks(contactLinks, annotationPrefix)}
      {renderSocialLinks(socialLinks, annotationPrefix)}
    </footer>
  );
};

const renderTitle = (title, annotationPrefix) => {
  if (!title) {
    return null;
  }
  return <h5 data-sb-field-path={`${annotationPrefix}.title`}>{title}</h5>;
};

const renderContactLinks = (contactLinks, annotationPrefix) => {
  if (contactLinks?.length === 0) {
    return null;
  }
  return (
    <div>
      {contactLinks.map((contactLink, index) => (
        <Link key={index} href={contactLink.url}>
          <a
            data-sb-field-path={`${annotationPrefix}.contactLinks.[${index}].url#@href ${annotationPrefix}.contactLinks.[${index}].label`}
          >
            {contactLink.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

const renderSocialLinks = (socialLinks, annotationPrefix) => {
  if (socialLinks?.length === 0) {
    return null;
  }
  return (
    <div>
      {socialLinks.map((socialLink, index) => (
        <Link key={index} href={socialLink.url}>
          <a
            data-sb-field-path={`${annotationPrefix}.socialLinks.[${index}].url#@href ${annotationPrefix}.socialLinks.[${index}].label`}
          >
            {socialLink.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
