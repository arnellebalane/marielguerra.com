import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  max-width: calc(100vw - 4.8rem);
  margin: 0 auto;

  @media (min-width: 1488px) {
    max-width: 144rem;
  }
`;

export const Grid = styled.div`
  --grid-columns: 4;

  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  column-gap: 2rem;

  @media (min-width: 720px) {
    --grid-columns: 8;
    column-gap: 3rem;
  }

  @media (min-width: 1024px) {
    --grid-columns: 12;
    column-gap: 3rem;
  }
`;
