import styled, { css } from 'styled-components';

export const Section = styled.section`
  padding-top: 6rem;
  padding-bottom: 21rem;

  @media (min-width: 720px) {
    padding-bottom: 12rem;
  }
`;

export const MobileLayout = styled.div`
  @media (min-width: 720px) {
    display: none;
  }
`;

export const DesktopLayout = styled.div`
  display: none;

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--grid-gap-size) * 2);
  }
`;

const ContentShared = css`
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 720px) {
    margin-top: 0;
    margin-bottom: 0;

    &[data-sc-index='0'] {
      margin-top: 15rem;
      margin-bottom: 15rem;
      text-align: right;
    }

    &[data-sc-index='1'] {
      margin-bottom: 12rem;
    }

    &[data-sc-index='2'] {
      margin-bottom: 22rem;
    }

    &[data-sc-index='3'] {
      margin-bottom: 10rem;
      text-align: right;
    }
  }

  @media (min-width: 1024px) {
    &[data-sc-index='0'] {
      padding-left: calc(var(--grid-column-size) + var(--grid-gap-size));
      margin-top: 20rem;
      margin-bottom: 26rem;
    }

    &[data-sc-index='1'] {
      padding-right: calc(var(--grid-column-size) + var(--grid-gap-size));
    }

    &[data-sc-index='2'] {
      padding-right: calc(var(--grid-column-size) + var(--grid-gap-size));
      margin-bottom: 23rem;
    }

    &[data-sc-index='3'] {
      padding-left: calc(var(--grid-column-size) + var(--grid-gap-size));
      margin-bottom: 20rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  ${ContentShared}
  padding: 2rem;

  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5;

  p:not(:first-child) {
    margin-top: 1em;
  }

  p:not(:last-child) {
    margin-bottom: 1em;
  }

  @media (min-width: 720px) {
    padding: 0;
    font-size: 2rem;
  }
`;

export const ContentPlaceholder = styled.div`
  ${ContentShared}

  aspect-ratio: 4 / 3;
  background-color: var(--complementary);

  @supports not (aspect-ratio: 1) {
    &::before {
      content: '';
      display: block;
      padding-top: calc(100% / 4 * 3);
    }
  }
`;

const WorkExperienceShared = css`
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 720px) {
    margin-top: 0;
    margin-bottom: 0;

    &[data-sc-index='0'] {
      margin-bottom: 15rem;
    }

    &[data-sc-index='1'] {
      margin-bottom: 10rem;
    }

    &[data-sc-index='2'] {
      margin-bottom: 10rem;
    }

    &[data-sc-index='3'] {
      margin-bottom: 12rem;
    }

    &[data-sc-index='4'] {
      margin-bottom: 8rem;
    }
  }

  @media (min-width: 1024px) {
    &[data-sc-index='0'] {
      padding-right: calc(var(--grid-column-size) + var(--grid-gap-size));
      margin-bottom: 22rem;
    }

    &[data-sc-index='1'] {
      padding-left: calc(var(--grid-column-size) + var(--grid-gap-size));
    }

    &[data-sc-index='2'] {
      padding-left: calc(var(--grid-column-size) + var(--grid-gap-size));
    }

    &[data-sc-index='3'] {
      padding-left: calc(var(--grid-column-size) + var(--grid-gap-size));
      margin-bottom: 26rem;
    }

    &[data-sc-index='4'] {
      padding-right: calc(var(--grid-column-size) + var(--grid-gap-size));
      margin-bottom: 24rem;
    }
  }
`;

export const WorkExperienceWrapper = styled.div`
  ${WorkExperienceShared}
`;

export const WorkExperiencePlaceholder = styled.div`
  ${WorkExperienceShared}

  aspect-ratio: 3 / 4;
  background-color: var(--complementary);

  @supports not (aspect-ratio: 1) {
    &::before {
      content: '';
      display: block;
      padding-top: calc(100% / 3 * 4);
    }
  }
`;

export const GalleryShared = css`
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 720px) {
    margin-top: 0;
    margin-bottom: 0;

    &[data-sc-index='0'] {
      margin-bottom: 30rem;
    }

    &[data-sc-index='1'] {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1024px) {
    &[data-sc-index='0'] {
      margin-bottom: 15rem;
    }

    &[data-sc-index='1'] {
      margin-bottom: 10rem;
    }
  }
`;

export const GalleryWrapper = styled.div`
  ${GalleryShared}
`;

export const GalleryPlaceholder = styled.div`
  ${GalleryShared}

  aspect-ratio: 1;
  background-color: var(--complementary);

  @supports not (aspect-ratio: 1) {
    &::before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }
`;

export const ClosingText = styled.h3`
  padding: 2rem;

  font-family: var(--font-primary);
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 5.4rem;
    text-align: right;

    padding-left: calc(var(--grid-column-size) + var(--grid-gap-size));
  }
`;
