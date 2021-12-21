import { Formik } from 'formik';
import Section from './Section';
import { createInitialValues } from './utils';

interface Props {
  sections: Frontier.Section[];
  onSubmit: (data: any) => any;
}

const Form = ({ sections, onSubmit }: Props) => (
  <Formik initialValues={createInitialValues(sections)} onSubmit={onSubmit}>
    {({ handleSubmit, isValid }) => (
      <form onSubmit={handleSubmit}>
        {sections.map((props, i) => (
          <Section {...props} key={i} />
        ))}
        <div className="form-field">
          <button data-testid="submit" type="submit" disabled={!isValid}>
            Submit
          </button>
        </div>
      </form>
    )}
  </Formik>
);

export default Form;
