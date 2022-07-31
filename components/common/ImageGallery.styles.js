import styled from 'styled-components';

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--grid-gap-size);
`;

export const ImagesGridColumn = styled.div`
  > *:not(:last-child) {
    margin-bottom: var(--grid-gap-size);
  }
`;

export const ImageWrapper = styled.div`
  --width: 180;
  --height: 180;

  position: relative;
  aspect-ratio: var(--width) / var(--height);

  @supports not (aspect-ratio: 1) {
    &::before {
      content: '';
      display: block;
      padding-top: calc(100% / var(--width) * var(--height));
    }
  }

  ${ImagesGrid}[data-sc-layout="layoutOne"] &[data-sc-index="0"] {
    --width: 380;
    --height: 246;
    grid-column: 1 / -1;

    @media (min-width: 720px) {
      margin-right: calc(var(--grid-column-size) + var(--grid-gap-size));
    }
  }

  ${ImagesGrid}[data-sc-layout="layoutOne"] &[data-sc-index="1"] {
    --height: 160;

    @media (min-width: 720px) {
      --width: 320;
      --height: 230;
    }
  }

  ${ImagesGrid}[data-sc-layout="layoutOne"] &[data-sc-index="2"] {
    --height: 140;

    @media (min-width: 720px) {
      --width: 320;
      --height: 390;
    }
  }

  ${ImagesGrid}[data-sc-layout="layoutOne"] &[data-sc-index="3"] {
    --height: 240;

    @media (min-width: 720px) {
      --width: 320;
      --height: 500;
    }
  }

  ${ImagesGrid}[data-sc-layout="layoutTwo"] &[data-sc-index="0"] {
    --height: 180;

    @media (min-width: 720px) {
      margin-left: var(--grid-gap-size);
    }
  }

  ${ImagesGrid}[data-sc-layout="layoutTwo"] &[data-sc-index="1"],
  ${ImagesGrid}[data-sc-layout="layoutTwo"] &[data-sc-index="2"] {
    --height: 260;
  }

  ${ImagesGrid}[data-sc-layout="layoutTwo"] &[data-sc-index="3"] {
    --height: 120;
  }

  ${ImagesGrid}[data-sc-layout="layoutThree"] &[data-sc-index="0"] {
    --width: 380;
    --height: 230;
    grid-column: 1 / -1;

    @media (min-width: 720px) {
      margin-right: calc(var(--grid-column-size) + var(--grid-gap-size));
    }
  }

  ${ImagesGrid}[data-sc-layout="layoutThree"] &[data-sc-index="1"] {
    --height: 260;
  }

  ${ImagesGrid}[data-sc-layout="layoutThree"] &[data-sc-index="1"] {
    --height: 260;
  }

  ${ImagesGrid}[data-sc-layout="layoutThree"] &[data-sc-index="2"] {
    --height: 180;

    @media (min-width: 720px) {
      --width: 320;
      --height: 220;
    }
  }
`;
