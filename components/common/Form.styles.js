import styled, { css } from 'styled-components';

export const Form = styled.form``;

export const Field = styled.div`
  --form-field-spacing: 2rem;

  &:not(:first-child) {
    margin-top: var(--form-field-spacing);
  }

  &:not(:last-child) {
    margin-bottom: var(--form-field-spacing);
  }

  @media (min-width: 720px) {
    --form-field-spacing: 4rem;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 1rem;

  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  text-transform: uppercase;

  ${(props) =>
    props['data-sc-required'] &&
    css`
      &::after {
        content: ' *';
      }
    `}

  @media (min-width: 720px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`;

const BaseFieldControl = css`
  display: block;
  width: 100%;
  min-height: 5rem;
  padding: 1.4rem 2rem;
  border: 0.1rem solid var(--inverted);
  border-radius: 0.8rem;

  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  &:focus {
    border-color: var(--primary);
    outline-color: var(--primary);
  }

  @media (min-width: 720px) {
    min-height: 6rem;

    font-size: 2rem;
    line-height: 3rem;
  }
`;

export const FieldInput = styled.input`
  ${BaseFieldControl}
`;

export const FieldTextarea = styled.textarea`
  ${BaseFieldControl}

  min-height: 14rem;
  resize: vertical;

  @media (min-width: 720px) {
    min-height: 16rem;
  }
`;

export const FormActions = styled.div`
  margin-top: 4rem;

  @media (min-width: 720px) {
    margin-top: 5.2rem;
  }
`;
