import styled from 'styled-components';

export const Header = styled.header`
  position: relative;

  color: var(--fg-inverted);
  background-color: var(--inverted);

  @media (min-width: 720px) {
    color: ${(props) =>
      props.inverted ? 'var(--fg-inverted)' : 'var(--fg-primary)'};
    background-color: transparent;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8rem;
`;

export const HomeLink = styled.a`
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.2rem;
  text-transform: uppercase;
`;
