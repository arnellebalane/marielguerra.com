import styled from 'styled-components';
import icMenu from '../../static/images/ic-menu.svg';
import icClose from '../../static/images/ic-close.svg';
import icNavLinkArrow from '../../static/images/ic-navlink-arrow.svg';

export const Nav = styled.nav`
  @media (min-width: 1024px) {
    margin-right: calc(var(--grid-column-size) + var(--grid-gap-size));
  }
`;

export const NavToggle = styled.button`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: none;

  font-size: 0;
  background: center center no-repeat;
  background-image: ${(props) =>
    props['data-sc-open'] ? `url(${icClose.src})` : `url(${icMenu.src})`};
  background-size: 100%;

  cursor: pointer;

  @media (min-width: 720px) {
    display: none;
  }
`;

export const NavContent = styled.div`
  display: ${(props) => (props['data-sc-open'] ? 'block' : 'none')};
  padding-bottom: 7rem;

  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;

  background-color: var(--inverted);

  @media (min-width: 720px) {
    display: block;
    padding: 0;
    margin-left: -0.8rem;
    margin-right: -0.8rem;

    position: static;

    background-color: transparent;
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 2.4rem;

  font-family: var(--font-primary);
  font-size: ${(props) => (props['data-sc-active'] ? '2.4rem' : '1.8rem')};
  font-weight: 500;
  line-height: 6.8rem;
  text-transform: uppercase;
  color: ${(props) => (props['data-sc-active'] ? 'var(--primary)' : 'inherit')};

  &:hover,
  &:focus {
    font-size: 2.4rem;
    color: var(--primary);
  }

  &::before {
    content: '';
    display: ${(props) => (props['data-sc-active'] ? 'block' : 'none')};
    width: 8rem;
    height: 4.5rem;
    margin-right: 2rem;

    background-image: url(${icNavLinkArrow.src});
  }

  &:hover::before,
  &:focus::before {
    display: block;
  }

  @media (min-width: 720px) {
    display: inline-block;
    padding: 0.8rem;

    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.8rem;
    text-decoration: ${(props) =>
      props['data-sc-active'] ? 'underline' : 'none'};

    &:hover,
    &:focus {
      font-size: 1.2rem;
      text-decoration: underline;
    }

    &::before,
    &:hover::before,
    &:focus::before {
      display: none;
    }
  }
`;
