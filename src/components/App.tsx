import { theme, sections } from '../data/form_instructions.json';
import Form from './Form';
import Styles from './Styles';

function App() {
  return (
    <>
      <Styles theme={theme} />
      <Form
        sections={sections as Frontier.Section[]}
        onSubmit={data => console.log('data', data)}
      />
    </>
  );
}

export default App;
