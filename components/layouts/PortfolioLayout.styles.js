import styled from 'styled-components';

export const PageContent = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 1024px) {
    grid-column: 3 / -3;
  }
`;

export const PageSection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: 720px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;
