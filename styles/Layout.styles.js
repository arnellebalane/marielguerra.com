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

export const GridProperties = styled.div`
  --grid-columns: 4;
  --grid-gap-size: 2rem;
  --grid-column-size: calc(
    (100% - ((var(--grid-columns) - 1) * var(--grid-gap-size))) /
      var(--grid-columns)
  );

  @media (min-width: 720px) {
    --grid-columns: 8;
    --grid-gap-size: 3rem;
  }

  @media (min-width: 1024px) {
    --grid-columns: 12;
  }
`;

export const Grid = styled(GridProperties)`
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap-size);
`;

export const Spacer = styled.div`
  height: 5rem;

  @media (min-width: 720px) {
    height: 10rem;
  }
`;
