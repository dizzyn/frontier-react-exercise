function Styles({ theme }: { theme: Frontier.Theme }) {
  const wariningColor = 'red';

  return (
    <style>
      {`
* {
  font-family: 'Roboto', sans-serif;
  color: ${theme['text_color']};
  box-sizing: border-box;
}

.warn {
  color: ${wariningColor}
}

body {
  background: ${theme['background_color']};
}

form {
  background-color: white;
  max-width: 500px;
  box-shadow: 0 0 5px rgba(0,0,0,.2);
  border-radius: 5px;
  margin: 20px auto;
  padding: 10px 20px;
}

.form-field {
  margin-top: 20px;
}

.form-field label {
  font-weight: bold;
}

.form-field input,
.form-field textarea,
.form-field select,
.form-field button {
  line-height: 40px;
  width: 100%;
  margin-top: 10px;
  padding-left: 10px;
  border: 2px solid lightgray;
  border-radius: 4px;
  background: whitesmoke;
}

.form-field select {
  padding: 12px 5px;
}

.form-field-required label:after {
  content: " *";
  display: inline;
  color: ${wariningColor};
} 

.form-field .element-boolean button {
  background: whitesmoke;
  color: black;
  width: 50%;
  border-radius: 0 5px 5px 0;
  border: 2px solid lightgray;
}

.form-field .element-boolean button.active {
  background: ${theme['primary_color']};
  border-color: ${theme['primary_color']};
  color: white;
}

.form-field .element-boolean button:nth-of-type(1) {
 border-radius: 5px 0 0 5px;
}


input[type="checkbox"] {
  float: left;
  width: 16px;
  height: 16px;
  border: 1px solid ${theme['secondary_color']};
}

.form-field button {
  background-color: ${theme['primary_color']};;
  color: white;
  font-size: 105%;
  border: none;
  border-radius: 10px;
}

button:disabled {
  color: gray;
}

h2 {
  color: ${theme['primary_color']};
}
    `}
    </style>
  );
}

export default Styles;
