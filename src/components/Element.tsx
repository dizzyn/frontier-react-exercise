import { ErrorMessage, useField } from 'formik';
import { getValidator } from './utils';

type ElementProps = Frontier.Element & {
  name: string;
};

const ElementText = ({ id, metadata, name, type }: ElementProps) => {
  const [field] = useField({
    name,
    validate: getValidator(metadata.required, metadata.pattern),
  });
  return (
    <>
      {type === 'text' ? (
        <input id={id} data-testid={name} {...field} {...metadata} />
      ) : (
        <textarea id={id} data-testid={name} {...field} {...metadata} />
      )}
    </>
  );
};

const ElementMultichoice = ({
  metadata: { options = [] },
  name,
  id,
}: ElementProps) => {
  const [field] = useField({
    name,
  });
  return (
    <select {...field}>
      {options.map(({ value, label }) => (
        <option key={label} value={value} id={id} data-testid={name}>
          {label}
        </option>
      ))}
    </select>
  );
};

const ElementBoolean = ({ id, name }: ElementProps) => {
  const [field, _, { setValue }] = useField({
    name,
  });
  return (
    <div className="element-boolean" id={id}>
      <button
        type="button"
        className={field.value ? 'active' : ''}
        onClick={() => setValue(true)}
        data-testid={name + '-yes'}
      >
        Yes
      </button>
      <button
        type="button"
        className={!field.value ? 'active' : ''}
        onClick={() => setValue(false)}
        data-testid={name + '-no'}
      >
        No
      </button>
    </div>
  );
};

const elements = {
  text: ElementText,
  textarea: ElementText,
  boolean: ElementBoolean,
  multichoice: ElementMultichoice,
} as const;

const Element = (props: Frontier.Element & { prefix: string }) => {
  const {
    type,
    id,
    prefix,
    question_text,
    metadata: { required },
  } = props;
  const name = `${prefix}.${id}`;
  const Element = elements[type];
  return (
    <div
      className={
        `form-field form-field-${type}` +
        (required ? ' form-field-required' : '')
      }
    >
      <label htmlFor={id}>{question_text}</label>
      <Element {...props} name={name} />
      <div className="warn">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Element;
