import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './HeaderNav.styles';

const HeaderNav = ({ links, open, onToggle, annotationPrefix = '' }) => {
  const router = useRouter();

  const handleToggle = () => onToggle?.(!open);
  const fieldPath = (index) =>
    [
      `${annotationPrefix}.navigationLinks.[${index}].url#@href`,
      `${annotationPrefix}.navigationLinks.[${index}].label`,
    ].join(' ');
  const isActiveLink = (href) => {
    const path = router.asPath;
    const pathTrimmed = path.replace(/\/$/, '');
    const hrefTrimmed = href.replace(/\/$/, '');
    return href === path || hrefTrimmed === pathTrimmed;
  };

  if (links?.length === 0) {
    return null;
  }

  return (
    <nav>
      <S.NavToggle onClick={handleToggle}>Toggle Menu</S.NavToggle>
      <S.NavContent open={open}>
        {links.map((link, index) => (
          <Link key={index} href={link.url} passHref>
            <S.NavLink
              data-sb-field-path={fieldPath(index)}
              active={isActiveLink(link.url)}
            >
              {link.label}
            </S.NavLink>
          </Link>
        ))}
      </S.NavContent>
    </nav>
  );
};

export default HeaderNav;
