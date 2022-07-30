import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  min-height: 4.2rem;
  padding: 1rem 2.6rem;
  border: 0.1rem solid var(--inverted);
  border-radius: 0.8rem;

  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  text-transform: uppercase;
  background-color: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    outline-color: var(--primary);
    border-color: var(--primary);
    background-color: var(--primary);
  }

  @media (min-width: 720px) {
    min-height: 4.8rem;

    font-size: 1.8rem;
    line-height: 2.6rem;
  }
`;
