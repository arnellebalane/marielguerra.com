import styled from 'styled-components';

export const PageContent = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 1024px) {
    grid-column: 3 / -3;
  }
`;

export const PageSection = styled.div`
  margin-top: 3rem;
  margin-bottom: 6rem;

  @media (min-width: 720px) {
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
`;

export const ReelWrapper = styled.div`
  margin: 0 calc(var(--wrapper-margin) * -1);

  @media (min-width: 1024px) {
    margin: 0
      calc(((var(--grid-column-size) * 2) + (var(--grid-gap-size) * 2)) * -1);
  }
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  cursor: pointer;
`;
