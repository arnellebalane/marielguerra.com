import Link from 'next/link';
import Image from 'next/image';
import * as L from '../../styles/Layout.styles';
import * as S from './AboutHeroSection.styles';

const AboutHeroSection = ({
  avatar,
  content,
  background,
  resume,
  annotationPrefix,
}) => {
  return (
    <S.Section data-sb-field-path={annotationPrefix}>
      {renderBackground(background)}
      <L.Wrapper>
        <L.Grid>
          <S.SectionContent>
            {renderAvatar(avatar)}
            {renderContent(content)}
            {renderResume(resume)}
          </S.SectionContent>
        </L.Grid>
      </L.Wrapper>
    </S.Section>
  );
};

const renderBackground = (background) => {
  if (!background?.url) {
    return <S.BackgroundPlaceholder />;
  }
  return (
    <S.BackgroundWrapper
      data-sc-image={background.url}
      data-sb-field-path=".background.url#@data-sc-image"
    />
  );
};

const renderAvatar = (avatar) => {
  if (!avatar?.url) {
    return null;
  }
  return (
    <S.AvatarWrapper>
      <Image
        src={avatar.url}
        alt={avatar.altText}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        data-sb-field-path={`.avatar.url#@src .avatar.altText#@alt`}
      />
    </S.AvatarWrapper>
  );
};

const renderContent = (content) => {
  if (!content) {
    return null;
  }
  return (
    <S.MarkdownContent
      options={{ forceWrapper: true }}
      data-sb-field-path=".content"
    >
      {content}
    </S.MarkdownContent>
  );
};

const renderResume = (resume) => {
  if (!resume?.url) {
    return null;
  }
  return (
    <S.ResumeWrapper>
      <S.ResumeLink
        href={resume.url}
        download="Mariel Guerra Resume.pdf"
        data-sb-field-path=".resume.url#@href .resume.label"
      >
        {resume.label}
      </S.ResumeLink>
    </S.ResumeWrapper>
  );
};

export default AboutHeroSection;
