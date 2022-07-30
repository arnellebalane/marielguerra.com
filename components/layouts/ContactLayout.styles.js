import styled from 'styled-components';

export const ContactSpacer = styled.div`
  height: 5rem;

  @media (min-width: 720px) {
    height: 10rem;
  }
`;

export const ContactSection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: 720px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const PageContent = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    grid-column: 2 / -2;
  }

  @media (min-width: 1024px) {
    grid-column: 4 / span 6;
  }
`;
