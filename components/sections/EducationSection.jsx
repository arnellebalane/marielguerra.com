import Link from 'next/link';
import Education from '../common/Education';
import * as L from '../../styles/Layout.styles';
import * as S from './EducationSection.styles';

const EducationSection = ({
  title,
  educations,
  link,
  annotationPrefix = '',
}) => {
  return null;
  return (
    <S.Section data-sb-field-path={annotationPrefix}>
      <L.Wrapper>
        <S.PageContent>
          {renderTitle(title)}
          {educations?.length > 0 && renderEducations(educations)}
          {renderLink(link)}
        </S.PageContent>
      </L.Wrapper>
    </S.Section>
  );
};

const renderTitle = (title) => {
  if (!title) {
    return null;
  }
  return <S.Title data-sb-field-path=".title">{title}</S.Title>;
};

const renderEducations = (educations) => {
  return (
    <S.EducationWrapper>
      <L.Grid data-sb-field-path=".educations">
        {educations.map((education, index) => (
          <S.EducationItem key={index}>
            <Education annotationPrefix={`.[${index}]`} {...education} />
          </S.EducationItem>
        ))}
      </L.Grid>
    </S.EducationWrapper>
  );
};

const renderLink = (link) => {
  if (!link?.url) {
    return null;
  }
  return (
    <S.PortfolioLinkWrapper>
      <Link href={link.url} passHref>
        <S.PortfolioLink data-sb-field-path=".link.url#@href .link.label">
          {link.label}
        </S.PortfolioLink>
      </Link>
    </S.PortfolioLinkWrapper>
  );
};

export default EducationSection;
