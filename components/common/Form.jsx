import Button from './Button';
import * as S from './Form.styles';

const Form = ({
  formName,
  fields,
  submitLabel,
  submissionSubject,
  annotationPrefix = '',
}) => {
  return (
    <S.Form name={formName} method="post" data-netlify="true">
      <input type="hidden" name="subject" value={submissionSubject} />

      <div data-sb-field-path={annotationPrefix}>
        {fields.map((field, index) => (
          <S.Field
            key={index}
            data-sb-field-path={`.[${index}] .[${index}].type#text()[1]`}
          >
            <S.FieldLabel
              htmlFor={field.name}
              data-sc-required={field.required}
              data-sb-field-path=".label"
            >
              {field.label}
            </S.FieldLabel>
            {renderFormControl(field)}
          </S.Field>
        ))}
      </div>

      <S.FormActions>
        <Button data-sb-field-path=".submitLabel">{submitLabel}</Button>
      </S.FormActions>
    </S.Form>
  );
};

const renderFormControl = (field) => {
  if (field.type === 'textarea') {
    return (
      <S.FieldTextarea
        name={field.name}
        id={field.id}
        required={field.required}
        data-sb-field-path={`.name#@name .name#@id`}
      ></S.FieldTextarea>
    );
  }
  return (
    <S.FieldInput
      type={field.type}
      name={field.name}
      id={field.id}
      required={field.required}
      data-sb-field-path={`.name#@name .name#@id`}
    />
  );
};

export default Form;
