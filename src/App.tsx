import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {

  const options = {
    formId: process.env.REACT_APP_FORM_ID,
    baseUrl: process.env.REACT_APP_BASE_URL
  }

  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (element.current) {
      //@ts-ignore
      const form = new OpenForms.OpenForm(element.current, options);
      form.init();
    }

  }, [element]);

  return (
    <div className="App">
      <h1>Open Formulieren create react app</h1>

      <div ref={element} />
    </div>
  );
}

export default App;
