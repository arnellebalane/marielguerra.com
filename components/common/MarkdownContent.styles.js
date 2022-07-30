import styled from 'styled-components';
import _Markdown from 'markdown-to-jsx';

export const Markdown = styled(_Markdown)`
  line-height: 1.5;
  text-align: center;

  h1:first-child {
    margin-bottom: 3rem;

    font-family: var(--font-primary);
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.8;

    strong {
      display: block;
      color: var(--primary);
    }
  }

  p {
    margin-top: 3rem;
    margin-bottom: 3rem;

    letter-spacing: 0.01em;
  }

  @media (min-width: 720px) {
    font-size: 2.4rem;

    h1:first-child {
      margin-bottom: 2rem;

      font-size: 4rem;
      line-height: 1.55;
    }
  }
`;
