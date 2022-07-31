import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding-bottom: 8rem;

  @media (min-width: 720px) {
    padding-bottom: 20rem;
  }
`;

export const BackgroundWrapper = styled.div`
  position: relative;
  aspect-ratio: 420 / 240;

  background: var(--inverted) top center no-repeat;
  background-image: url(${(props) => props['data-sc-image']});
  background-size: cover;

  @supports not (aspect-ratio: 1) {
    &::before {
      content: '';
      display: block;
      padding-top: calc(100% / 420 * 240);
    }
  }

  @media (min-width: 720px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    aspect-ratio: auto;

    background-size: initial;

    &::before {
      display: none;
    }
  }

  @media (min-width: 1920px) {
    background-size: cover;
  }
`;

export const BackgroundPlaceholder = styled.div`
  height: 24rem;

  @media (min-width: 720px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;

    background-color: var(--inverted);
  }
`;

export const SectionContent = styled.div`
  grid-column: 1 / -1;
  position: relative;
  margin-top: -10rem;

  @media (min-width: 720px) {
    padding-top: 21rem;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    grid-column: 3 / -3;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 1px solid var(--inverted);
  margin: 0 auto;
  margin-bottom: 1rem;

  @media (min-width: 720px) {
    width: 13.2rem;
    height: 13.2rem;
    margin-bottom: 4.4rem;
  }
`;

export const MarkdownContent = styled(Markdown)`
  margin-bottom: 3rem;
  text-align: center;

  h1:first-child {
    padding: 2rem;
    margin-bottom: 1rem;

    font-family: var(--font-primary);
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.55;

    strong {
      color: var(--primary);
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 1.5;
    letter-spacing: 0.01em;
  }

  @media (min-width: 720px) {
    margin-bottom: 4rem;
    color: var(--fg-inverted);

    h1:first-child {
      font-size: 4rem;
    }

    p {
      font-size: 2.4rem;
    }
  }
`;

export const ResumeWrapper = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  @media (min-width: 720px) {
    margin-bottom: 6rem;
  }
`;

export const ResumeLink = styled.a`
  display: inline-block;
  padding: 1rem 2.6rem;
  border: none;
  border-radius: 0.8rem;

  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.2rem;
  background-color: var(--primary);
  cursor: pointer;

  @media (min-width: 720px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;
