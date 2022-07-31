import styled from 'styled-components';
import icHomeArrow from '../../static/images/ic-home-arrow.svg';

export const Section = styled.section`
  background-color: var(--complementary);
`;

export const PageContent = styled.div`
  padding-top: 5rem;
  padding-bottom: 6rem;

  @media (min-width: 720px) {
    padding-top: 4rem;
    padding-bottom: 8rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 3rem;

  font-family: var(--font-primary);
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 1.6;
  word-break: break-all;
  color: var(--fg-complementary);

  @media (min-width: 720px) {
    font-size: 6rem;
    text-align: center;
  }
`;

export const EducationWrapper = styled.div`
  margin-bottom: 6rem;

  @media (min-width: 720px) {
    margin-bottom: 12rem;
  }
`;

export const EducationItem = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    grid-column: auto / span 4;
  }
`;

export const PortfolioLinkWrapper = styled.div`
  text-align: center;
`;

export const PortfolioLink = styled.a`
  display: inline-flex;
  align-items: center;

  font-family: var(--font-primary);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3.2rem;
  letter-spacing: 0.01em;
  color: var(--fg-complementary);

  &::after {
    content: '';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1.2rem;

    background: url(${icHomeArrow.src}) center center no-repeat;
    background-size: 100%;

    @supports (mask-image: url('')) {
      background: currentColor;
      mask: url(${icHomeArrow.src}) center center no-repeat;
      mask-size: 100%;
    }
  }

  @media (min-width: 720px) {
    font-size: 3rem;
    line-height: 4.2rem;

    &::after {
      margin-left: 2rem;
    }
  }
`;
