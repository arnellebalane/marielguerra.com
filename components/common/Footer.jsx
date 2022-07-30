import Link from 'next/link';
import * as L from '../../styles/Layout.styles';
import * as S from './Footer.styles';

const Footer = ({
  title,
  contactLinks,
  socialLinks,
  annotationPrefix = '',
}) => {
  return (
    <S.Footer data-sb-field-path={annotationPrefix}>
      <L.Wrapper>
        <S.FooterContent>
          <S.FlexibleDetails>
            {renderTitle(title, annotationPrefix)}
            {renderContactLinks(contactLinks, annotationPrefix)}
          </S.FlexibleDetails>
          {renderSocialLinks(socialLinks, annotationPrefix)}
        </S.FooterContent>
      </L.Wrapper>
    </S.Footer>
  );
};

const renderTitle = (title, annotationPrefix) => {
  if (!title) {
    return null;
  }
  return (
    <S.Title data-sb-field-path={`${annotationPrefix}.title`}>{title}</S.Title>
  );
};

const renderContactLinks = (contactLinks, annotationPrefix) => {
  if (contactLinks?.length === 0) {
    return null;
  }

  const fieldPath = (index) =>
    [
      `${annotationPrefix}.contactLinks.[${index}].url#@href`,
      `${annotationPrefix}.contactLinks.[${index}].label`,
    ].join(' ');
  return (
    <S.ContactLinks>
      {contactLinks.map((contactLink, index) => (
        <Link key={index} href={contactLink.url} passHref>
          <S.ContactLink data-sb-field-path={fieldPath(index)}>
            {contactLink.label}
          </S.ContactLink>
        </Link>
      ))}
    </S.ContactLinks>
  );
};

const renderSocialLinks = (socialLinks, annotationPrefix) => {
  if (socialLinks?.length === 0) {
    return null;
  }

  const socialLinkIcon = (url) => {
    const icons = ['facebook', 'instagram', 'linkedin'];
    for (const icon of icons) {
      if (url.includes(icon)) {
        return icon;
      }
    }
    return 'default';
  };
  const fieldPath = (index) =>
    [
      `${annotationPrefix}.socialLinks.[${index}].url#@href`,
      `${annotationPrefix}.socialLinks.[${index}].label`,
    ].join(' ');
  return (
    <S.SocialLinks>
      {socialLinks.map((socialLink, index) => (
        <Link key={index} href={socialLink.url} passHref>
          <S.SocialLink
            data-sb-field-path={fieldPath(index)}
            data-sc-icon={socialLinkIcon(socialLink.url)}
          >
            {socialLink.label}
          </S.SocialLink>
        </Link>
      ))}
    </S.SocialLinks>
  );
};

export default Footer;
