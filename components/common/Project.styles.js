import styled from 'styled-components';

export const Project = styled.article`
  position: relative;

  overflow: hidden;
  cursor: pointer;
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  aspect-ratio: 460 / 275;
  background-color: var(--complementary);

  @supports not (aspect-ratio: 1) {
    &::before {
      content: '';
      display: block;
      padding-top: calc(100% / 460 * 275);
    }
  }
`;

export const Details = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 1.4rem 2rem;

  color: ${(props) => props['data-sc-text'] || 'var(--fg-inverted)'};
  background-color: ${(props) =>
    props['data-sc-background'] || 'var(--inverted)'};

  ${Project}:hover &,
  ${Project}:focus & {
    transform: translateY(-100%);
  }
`;

export const Title = styled.h2`
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.2rem;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
`;
