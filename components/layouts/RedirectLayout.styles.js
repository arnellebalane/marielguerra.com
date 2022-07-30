import styled from 'styled-components';

export const Message = styled.h1`
  padding-top: 4rem;
  padding-bottom: 4rem;

  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.8;
  text-align: center;

  @media (min-width: 720px) {
    font-size: 4rem;
    line-height: 1.55;
  }
`;
