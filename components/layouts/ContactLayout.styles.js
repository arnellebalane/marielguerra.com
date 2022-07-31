import styled from 'styled-components';

export const PageContent = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    grid-column: 2 / -2;
  }

  @media (min-width: 1024px) {
    grid-column: 4 / span 6;
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
