import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
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
  gap: 2rem;

  @media (min-width: 720px) {
    --grid-columns: 8;
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    --grid-columns: 12;
    gap: 3rem;
  }
`;

export const Spacer = styled.div`
  height: 5rem;

  @media (min-width: 720px) {
    height: 10rem;
  }
`;
