import styled from 'styled-components';

export const WorkExperience = styled.article``;

export const ThumbnailWrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;
  aspect-ratio: 380 / 240;

  @supports not (aspect-ratio: 1) {
    &::before {
      content: '';
      display: block;
      padding-top: calc(100% / 380 * 240);
    }
  }
`;

export const TitleAndCompany = styled.h2`
  margin-bottom: 0.4rem;

  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;

  @media (min-width: 720px) {
    font-size: 2rem;
    line-height: 1.5;
  }
`;

export const Title = styled.span`
  color: var(--primary);
`;

export const DurationAndLocation = styled.p`
  margin-bottom: 2rem;

  font-family: var(--font-primary);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.01em;
`;

export const DescriptionList = styled.ul`
  padding: 0;
  padding-left: 1.5em;
`;

export const Description = styled.li`
  margin-top: 1em;
  margin-bottom: 1em;

  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 0.01em;

  @media (min-width: 720px) {
    font-size: 1.8rem;
  }
`;
