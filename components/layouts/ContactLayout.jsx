import Markdown from 'markdown-to-jsx';
import PageLayout from './PageLayout';

const ContactLayout = ({ page, siteConfig }) => {
  return (
    <PageLayout page={page} siteConfig={siteConfig}>
      <div data-sb-object-id={page.__id}>
        {renderContent(page.content)}
        {renderForm(page.fields, page.submitLabel)}
      </div>
    </PageLayout>
  );
};

const renderContent = (content) => {
  if (!content) {
    return null;
  }
  return <Markdown data-sb-field-path=".content">{content}</Markdown>;
};

const renderForm = (fields, submitLabel = 'Submit') => {
  if (fields?.length === 0) {
    return null;
  }
  return (
    <form action="#">
      <div data-sb-field-path=".fields">
        {fields.map((field, index) => (
          <div
            key={index}
            data-sb-field-path={`.[${index}] .[${index}].type#text()[1]`}
          >
            <label htmlFor={field.name} data-sb-field-path=".label">
              {field.label}
            </label>
            {renderFormControl(field)}
          </div>
        ))}
      </div>

      <button data-sb-field-path=".submitLabel">{submitLabel}</button>
    </form>
  );
};

const renderFormControl = (field) => {
  if (field.type === 'text') {
    return (
      <textarea
        name={field.name}
        id={field.id}
        required={field.required}
        data-sb-field-path={`.name#@name .name#@id`}
      ></textarea>
    );
  }
  return (
    <input
      type={field.type}
      name={field.name}
      id={field.id}
      required={field.required}
      data-sb-field-path={`.name#@name .name#@id`}
    />
  );
};

export default ContactLayout;
