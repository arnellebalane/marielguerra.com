import styled from 'styled-components';

export const ProjectsList = styled.div`
  --projects-list-columns: 1;

  display: grid;
  grid-template-columns: repeat(var(--projects-list-columns), 1fr);
  gap: 2rem;

  @media (min-width: 720px) {
    --projects-list-columns: 2;
    gap: 3rem;
  }
`;

export const TagFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const Tag = styled.button`
  padding: 0.7rem 0.8rem;
  border: none;

  font-family: var(--font-primary);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  text-transform: uppercase;
  text-decoration: ${(props) =>
    props['data-sc-selected'] ? 'underline' : 'none'};
  color: ${(props) =>
    props['data-sc-selected'] ? 'var(--primary)' : 'inherit'};
  background: none;
  cursor: pointer;
`;
