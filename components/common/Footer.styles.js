import styled, { css } from 'styled-components';
import icFacebook from '../../static/images/ic-facebook.svg';
import icInstagram from '../../static/images/ic-instagram.svg';
import icLinkedIn from '../../static/images/ic-linkedin.svg';

const iconsMapping = {
  facebook: icFacebook.src,
  instagram: icInstagram.src,
  linkedin: icLinkedIn.src,
};

export const Footer = styled.footer`
  margin-top: auto;

  color: var(--fg-inverted);
  background-color: var(--inverted);
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: 720px) {
    flex-direction: row;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const FlexibleDetails = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h5`
  margin-bottom: 0.8rem;

  font-family: var(--font-primary);
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.2rem;
  text-transform: uppercase;

  @media (min-width: 720px) {
    margin-bottom: 0.6rem;

    font-size: 4rem;
    line-height: 5.6rem;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: -0.3rem;

  @media (min-width: 720px) {
    flex-direction: row;
    margin: -0.3rem -1.5rem;
  }
`;

export const ContactLink = styled.a`
  margin: 0.3rem;

  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;

  &:hover,
  &:focus {
    color: var(--primary);
  }

  @media (min-width: 720px) {
    margin: 0.3rem 1.5rem;

    font-size: 1.8rem;
    letter-spacing: 0.01em;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
  margin-top: 2rem;

  @media (min-width: 720px) {
    margin-top: 0;
  }
`;

export const SocialLink = styled.a`
  width: 2.8rem;
  height: 2.8rem;
  margin: 1rem;

  font-size: 0;
  background: center center no-repeat;
  background-size: 100%;

  ${(props) =>
    props['data-sc-icon'] && iconsMapping[props['data-sc-icon']]
      ? css`
          background-image: url(${iconsMapping[props['data-sc-icon']]});

          @supports (mask-image: url('')) {
            background-image: none;
            background-color: currentColor;
            mask-image: url(${iconsMapping[props['data-sc-icon']]});

            &:hover,
            &:focus {
              color: var(--primary);
            }
          }
        `
      : css`
          display: none;
        `}
`;
