import styled from 'styled-components';
import icHomeArrow from '../../static/images/ic-home-arrow.svg';

export const PageWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  color: var(--fg-inverted);
  background-color: var(--inverted);
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  position: relative;
  z-index: 1;

  text-align: center;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      var(--overlay-100),
      var(--overlay-200),
      var(--overlay-300)
    );
  }
`;

export const BackgroundVideo = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const Title = styled.h1`
  margin-bottom: 0.6rem;

  font-family: var(--font-primary);
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 4.8rem;
  text-transform: uppercase;

  @media (min-width: 720px) {
    font-size: 10rem;
    line-height: 14rem;
  }
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.6rem;

  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: 0.01em;

  &:hover,
  &:focus {
    color: var(--primary);
  }

  &::after {
    content: '';
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 1.2rem;

    background: url(${icHomeArrow.src}) center center no-repeat;
    background-size: 100%;

    @supports (mask-image: url('')) {
      background: currentColor;
      mask: url(${icHomeArrow.src}) center center no-repeat;
    }
  }

  @media (min-width: 720px) {
    font-size: 3rem;
    line-height: 4.2rem;

    &::after {
      width: 2.4rem;
      height: 2.4rem;
      margin-left: 2rem;
    }
  }
`;
