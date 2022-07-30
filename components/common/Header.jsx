import { useState } from 'react';
import Link from 'next/link';
import HeaderNav from './HeaderNav';
import * as L from '../../styles/Layout.styles';
import * as S from './Header.styles';

const Header = ({
  homeLink,
  navigationLinks,
  annotationPrefix = '',
  inverted = false,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <S.Header data-sb-field-path={annotationPrefix} inverted={inverted}>
      <L.Wrapper>
        <S.HeaderContent>
          {renderHomeLink(homeLink, annotationPrefix)}
          <HeaderNav
            links={navigationLinks}
            open={isNavOpen}
            onToggle={setIsNavOpen}
          />
        </S.HeaderContent>
      </L.Wrapper>
    </S.Header>
  );
};

const renderHomeLink = (homeLink, annotationPrefix) => {
  if (!homeLink) {
    return null;
  }

  const fieldPath = [
    `${annotationPrefix}.homeLink.url#@href`,
    `${annotationPrefix}.homeLink.label`,
  ].join(' ');
  return (
    <Link href={homeLink.url}>
      <S.HomeLink data-sb-field-path={fieldPath}>{homeLink.label}</S.HomeLink>
    </Link>
  );
};

export default Header;
