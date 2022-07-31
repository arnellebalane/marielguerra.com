const { default: styled } = require('styled-components');

export const Education = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.4rem;
  padding-bottom: 3rem;

  color: ${(props) => props['data-sc-text'] || 'var(--fg-inverted)'};
  background-color: ${(props) =>
    props['data-sc-background'] || 'var(--inverted)'};

  @media (min-width: 720px) {
    padding: 2rem;
    padding-bottom: 4rem;
  }
`;

export const ThumbnailWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  min-height: 16rem;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    min-height: 21rem;
  }
`;

export const Title = styled.h2`
  margin-top: auto;

  font-family: var(--font-primary);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.4rem;
  text-transform: uppercase;

  @media (min-width: 720px) {
    margin-bottom: 0.4rem;

    font-size: 3rem;
    line-height: 4.2rem;
  }
`;

export const Institution = styled.h3`
  margin-bottom: 1.4rem;

  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  @media (min-width: 720px) {
    margin-bottom: 1rem;

    font-size: 2rem;
    line-height: 2.8rem;
  }
`;

export const Duration = styled.p`
  font-family: var(--font-primary);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8rem;
  letter-spacing: 0.04em;

  @media (min-width: 720px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;
